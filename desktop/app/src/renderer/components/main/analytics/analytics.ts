/**
 *  This script file will handle all javascript needed for the analytics
 *  section of the application.
 */

namespace Analytics {
    class Analytics extends Component {
        constructor(name: string) {
            super(name);
            this.render();
        }

        private render = async (): Promise<void> => {
            const component = await this.generateComponent(this.name, '#includes', 'main', state);
        }
    }
    new Analytics('analytics');
}
