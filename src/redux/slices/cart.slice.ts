import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItems } from "../../utils/localStorage";


interface CartState {
	id: string | number;
	name: string;
	price: number;
	image: string;
	info: string;
}



const initialState: CartState[] = getItems('cart') || [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartState>) => {
			const itemInCart = state.find((item) => item.name === action.payload.name);
			if (!itemInCart) {

				state.push({ ...action.payload });
			}
		},
		removeToCart: (state, action: PayloadAction<CartState>) => {
			if (state.some((item) => item.name === action.payload.name)) {
				return state = state.filter((item) => item.name !== action.payload.name)/*funcionara con id? o lo cambio... */
			}
		},
	}
})

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;