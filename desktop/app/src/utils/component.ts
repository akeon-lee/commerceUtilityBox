/**
 *  This is the components class file. It is the base of all components that
 *  will be loaded to the main html. All other components should extend
 *  this class.
 */

import Route from './router/route';

export default class Component {
    name: string;
    controller: boolean;

    /** 
     *  @param name the name of the component
     *  @param controller whether the component is a controller or not
     */
    constructor(name: string, controller: boolean = false) {
        this.name = name;
        this.controller = controller;
        // console.log(this);
    }

    /**
     *  Method to assemble the component before loading it to the dom.
     * 
     *  @param name the name of the component
     *  @param element the element to select for loading the component to
     *  @param dir the main directory in which the component lives in
     *  @param state the global state object initiated in the beginning of the app
     *  @param router pass in the global router initiated in the beginning of the app
     *  @param defaultRoute boolean to determine if the component should be the default route
     */
    private generateComponent = async (
        name: string,
        element: string,
        dir: string,
        state: IState,
        router: any,
        defaultRoute: boolean = false
    ): Promise<LocalResponse> => {
        try {
            // select the `includes` area element
            const includes: HTMLElement = document.querySelector(element) as HTMLElement;
            if (includes) {
                // get the `html` text from file
                const html: LocalResponse = await this.getHTML(`../${dir}/${name}/${name}.html`);
                // create a new element to insert the html component.
                const container: HTMLDivElement = document.createElement('div');
                container.setAttribute('id', name);
                container.insertAdjacentHTML('afterbegin', html.body);
                // if defaultRoute or controller we show the element.
                defaultRoute || this.controller ? container.style.display = 'block' : container.style.display = 'none';
                includes.insertAdjacentElement('beforeend', container);
                const included = await this.includeHTML(container);
                // add the html component to the global state object.
                if (included.status) {
                    const assemble: Assemble = {};
                    assemble[name] = container;
                    state.assignToComponents(assemble);
                }
                // build the route for the generated component.
                this.buildRoute(name, container, router, this.controller, defaultRoute);
                return {
                    status: true,
                    body: `${name} component created successfuly`,
                    element: container
                }
            } else {
                throw new Error('includes element could not be found');
            }
        } catch (e) {
            return Promise.reject({
                status: false,
                body: e.message
            });
        }
    }

    /**
     *  Method to include the html files that are specified in the html files.
     *  e.g. `<include include-html="./path/path/path.html"></include>`.
     * 
     *  @param parent the parent element to which we will be including html files for.
     */
    private includeHTML = async (parent: HTMLElement): Promise<LocalResponse> => {
        // loop through a collection of all HTML elements with tag name `include`
        const tags: HTMLCollection = parent.getElementsByTagName('include');
        for (const tag of tags) {
            // search for elements with a certain atrribute.
            const file: string = tag.getAttribute('include-html') as string;
            if (file) {
                // make an HTTP request using the attribute value as the file path.
                const html: LocalResponse = await this.getHTML(file);
                // insert `html` into the <include> tag.
                tag.insertAdjacentHTML('afterbegin', html.body);
                // create fragment and append child elements of `tag` into fragment.
                const fragment: DocumentFragment = document.createDocumentFragment();
                while (tag.firstChild) {
                    fragment.appendChild(tag.firstChild);
                }
                // replace the include element with the document fragment.
                tag.parentElement!.replaceChild(fragment, tag);
                // apply recursion.
                await this.includeHTML(parent);
            }
        }
        return {
            status: true,
            body: 'HTML successfully included'
        }
    }

    /**
     *  Method to only get the HTML text from a html file.
     * 
     *  @param path - the path to which the html resides.
     */
    private getHTML = async (path: string): Promise<LocalResponse> => {
        try {
            const html: Body = await fetch(`${path}`);
            return {
                status: true,
                body: await html.text()
            }
        } catch (e) {
            return {
                status: false,
                body: e.message
            }
        }
    }

    /**
     *  Method to build a route for the created component
     * 
     *  @param name the name of the route
     *  @param element the element associated with the route
     *  @param router the global router object initiated in the beginning of the app
     *  @param controller whether the component is a controller or not
     *  @param defaultRoute whether the route is a default route or not
     */
    private buildRoute = (name: string, element: HTMLElement, router: any, controller: boolean, defaultRoute: boolean = false): void => {
        if (!controller) {
            router.routes.push(new Route(name, element, defaultRoute));
        } else {
            return;
        }
    }
}
