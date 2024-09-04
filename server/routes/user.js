const router = require("express").Router()
const Booking = require("../models/Booking")

// ----------- Get Trip List -----------------------
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

module.exports = router