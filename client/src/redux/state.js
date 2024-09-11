import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    token: null
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setListings: (state, action) => {
            state.listings = action.payload.listings
        },
        setTripList: (state, action) => {
            state.user.tripList = action.payload
        },
        setWishList: (state, action) => {
            state.user.wishlist = action.payload
        },

    }
})

export const { setLogin, setLogout, setListings, setTripList, setWishList } = userSlice.actions
export default userSlice.reducer