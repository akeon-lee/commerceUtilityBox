/**
 * @overview This file is used to declare types for custom areas not relating to express, mongo or any other packages that are installed. Everything
 * is put in one file but this file will eventually need to be split into multiple files for organization purpose.
 * 
 * @todo: split everything into it's respected file
 */

// export type User = {
//     _id?: string;
//     firstName: string;
//     lastName: string;
//     username: string;
//     email: string;
//     password?: string;
//     addresses?: Array<UserAddress>
//     tokens?: UserTokens
// }

// // Address format for the user
// export type UserAddress = {
//     _id?: string;
//     company: string;
//     firstName: string;
//     lastName: string;
//     address1: string;
//     address2: string;
//     city: string;
//     state: string;
//     zip: string;
//     country: string;
//     primary: boolean;
//     changed?: boolean;
// }

// // Token storage format for user
// export type UserTokens = {
//     ebay?: {
//         auth: string,
//         ref: string
//     }
//     pitneyBowesAuthToken?: string;
//     woocommerce?: {
//         consumer: string,
//         secret: string
//     }
// }

// export type Product = {
//     _id?: string;
//     image: string;
//     sku: string;
//     title: string;
//     quantity: {
//         quantity: number,
//         available: number,
//         alert: number,
//         pendingOrders: number,
//         needed: number
//     }
//     description: string;
//     price: {
//         sell: number,
//         purchase: number,
//         stockValue: number
//     }
//     category: string;
//     variationGroup: string;
//     upc: string;
//     condition: string;
//     location: {
//         fullAddress: string,
//         company: string,
//         name: string,
//         address1: string,
//         address2: string,
//         city: string,
//         state: string,
//         zip: string,
//         country: string,
//         email: string,
//         phone: string
//     }
//     detail: {
//         weight: number,
//         height: number,
//         width: number,
//         depth: number
//     }
//     bin: string;
//     monitor: boolean;
//     orders: [];
//     linked: {
//         ebay: [],
//         amazon: [],
//         woocommerce: [],
//         shopify: []
//     }
//     created: Date;
//     modified: Date;
//     userID?: string; // not included when creating product
//     changed?: boolean;
// }

// // For JWT Strategy options
// export type JwtStrategyOptions = {
//     jwtFromRequest: any;
//     secretOrKey: string;
// }

// // What the Database class should return
// export type DatabaseConfig = {
//     database: string;
//     secret: string;
// }

// // The object structre of woocommerce tokens
// export type WoocommerceTokens = {
//     consumer?: string;
//     secret?: string;
// }
