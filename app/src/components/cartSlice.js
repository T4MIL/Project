import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        totalQUantity: 0,
    },
    reducers: {
        addItem: (state, action) => {
            console.log(state.items)
            const exist = (state.items).findIndex(x => x.id === action.payload.id)
            if (exist >= 0) {
                state.items[exist].quantity += 1
            }
            else {
                const product = action.payload
                state.items.push({
                    ...product,
                    quantity: 1,
                });
            }
            state.totalPrice += action.payload.price
            state.totalQUantity++
            // console.log(state.totalQUantity)
        },
        removeItem: (state, action) => {
            const exist = (state.items).findIndex(x => x.id === action.payload.id)
            // console.log(exist)
            if (exist >= 0) {
                state.items = state.items.toSpliced(exist, 1)
            }
            state.totalQUantity -= action.payload.quantity
            state.totalPrice -= (action.payload.price * action.payload.quantity)
            // console.log(Math.floor(state.totalPrice))
        },
        clearCart: (state) => {
            state.items = []
            state.totalQUantity=0
            state.totalPrice=0
        },
        reduceItem: (state, action) => {
            const exist = (state.items).findIndex(x => x.id === action.payload.id)
            if (action.payload.quantity > 1) {
                state.items[exist].quantity -= 1
            }
            else {
                state.items = state.items.toSpliced(exist, 1)
            }
            state.totalPrice -= action.payload.price
            state.totalQUantity--
        },
    }
})
export const { addItem, removeItem, clearCart, reduceItem } = cartSlice.actions
export default cartSlice.reducer