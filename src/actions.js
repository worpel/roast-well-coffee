import {
    COFFEE_TYPE_SELECTED,
    COFFEE_TYPE_PENDING,
    COFFEE_ORDER_SUCCESS,
    COFFEE_ORDER_FAILED
}

    from './constants.js';

export const selectCoffee = (e.target.click)({
    type: COFFEE_TYPE_SELECTED({ text: 'You have selected your coffee!' }),
    payload: text
})

export const coffeeOrderSuccess = () => (dispatch) => {
    dispatch({ type: COFFEE_TYPE_PENDING, text: 'Your order is processing...' });
    fetch('server.js')
        .then(response => response.json())
        .then(data => dispatch({ type: COFFEE_ORDER_SUCCESS({ text: 'Your order has been placed successfully!' }), payload: data }))
        .catch(error => dispatch({ type: COFFEE_ORDER_FAILED({ text: 'Sorry, your order has failed :/' }), payload: error }))
}
