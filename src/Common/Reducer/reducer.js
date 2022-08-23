export const initialState = {
    cart: [],
    user: null,
}
export const getCartTotal = (cart) => {
    let amount = 0;
    for (let i = 0; i < cart.length; i++) {
        amount += parseFloat(cart[i].price);

    }
    return amount;
}


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                cart: []
            }
        case "REMOVE_TO_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
            if (index >= 0) {
                newCart.splice(index, 1)
            } else {
                console.warn(`can't remove product(id:${action.id})as its not in cart!`)
            }
            return {
                ...state,
                cart: newCart
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}
export default reducer;