// import {
//     COFFEE_TYPE_SELECTED,
//     COFFEE_TYPE_PENDING,
//     COFFEE_ORDER_SUCCESS,
//     COFFEE_ORDER_FAILED
// } from './constants.js';

// const initialStateCoffee = {
//     coffeeOrderSubmit: (e.target.click)
// }

// export const selectCoffee = (state = initialStateCoffee, action = {}) => {
//     switch (action.type) {
//         case COFFEE_TYPE_SELECTED:
//             return Object.assign({}, state, {
//                 selectCoffee: action.payload
//             });
//         default:
//             return state;
//     }
// }

// const submitCoffee = {
//     isPending: false,
//     coffee: [],
//     error: ''
// }

// export const coffeeOrderStatus = (state = submitCoffee, action = {}) => {
//     switch (action.type) {
//         case COFFEE_TYPE_PENDING:
//             return Object.assign({}, state, {
//                 isPending: true
//             })
//         case COFFEE_ORDER_SUCCESS:
//             return Object.assign({}, state, {
//                 coffee: action.payload,
//                 isPending: false
//             })
//         case COFFEE_ORDER_FAILED:
//             return Object.assign({}, state, {
//                 error: action.payload,
//                 isPending: false
//             })
//         default:
//             return state;

//     }
// }