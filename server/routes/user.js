const router = require("express").Router()
const Booking = require("../models/Booking")
const User = require("../models/User")
const Listing = require("../models/Listing")

// ----------- Get Trip List -------------------------------------
router.get("/:userId/trips", async (req, res) => {
    try {
        const { userId } = req.params
        const trips = await Booking.find({ customerId: userId }).populate("customerId hostId listingId")
        res.status(200).json(trips)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Cannot find trips", error: error.message })
    }
})

// ----------- Add Listing To WishList ---------------------------
router.patch("/:userId/:listingId", async (req, res) => {
    try {
        const {userId, listingId} = req.params
        console.log(userId);
        console.log(listingId);
        const user = await User.findById(userId)
        const listing = await Listing.findById(listingId).populate("creator")
        
         
        const favoriteListing = user.wishList.find((item) => item._id.toString() === listingId)

        if (favoriteListing) {
            user.wishList = user.wishList.filter((item) => item._id.toString() !== listingId)
            await user.save()
            res.status(200).json({message: "Listing has been removed from wishlist", wishList: user.wishList})
        } else {
            user.wishList.push(listing)
            await user.save()
            res.status(200).json({message: "Listing has been added to wishlist", wishlist: user.wishList})
        } 
    } catch (error) {
        console.log(error)
        res.status(404).json({error: error.message})
    }
})

module.exports = router