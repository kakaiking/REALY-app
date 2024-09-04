const router = require("express").Router()

const Booking = require("../models/Booking")

// -----------Create Booking-------------------

router.post("/create", async (req, res) => {
    try {
        const { customerId, hostId, listingId, startDate, endDate, totalPrice } = req.body
        const newBooking = new Booking({ customerId, hostId, listingId, startDate, endDate, totalPrice })
        await newBooking.save()
        res.status(200).json(newBooking)
    } catch (error) {
        res.status(400).json({ message: "Failed to create a new Booking!", error: error.message })
    }
})

module.exports = router