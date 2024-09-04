import { useEffect, useState } from "react"
import "../styles/List.scss"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import { setTripList } from "../redux/state"
import { useSelector, useDispatch } from "react-redux"
import ListingCard from "../components/ListingCard"


const TripList = () => {
    const [loading, setLoading] = useState(true)
    const userId = useSelector((state) => state.user._id)
    const tripList = useSelector((state) => state.user.tripList)

    const dispatch = useDispatch()

    const getTripList = async () => {
        try {
            const response = await fetch(`http://localhost:3001/users/${userId}/trips`, {
                method: "GET"
            })
            const data = await response.json()
            dispatch(setTripList(data))
            setLoading(false)
        } catch (error) {
            console.log("fetching Trip List failed!", error.message)
        }
    }

    useEffect(() => {
        getTripList()
    }, [])
  return loading? <Loader /> : (
    <>
        <Navbar />
        <h1 className="title-list">Your Trip List</h1>
        <div className="list">
            {tripList?.map(({ listingId, startDate, endDate, totalPrice, booking = true }) => (
                <ListingCard 
                    listingId={listingId._id}
                    listingPhotoPaths={listingId.listingPhotoPaths}
                    city={listingId.city}
                    province={listingId.province}
                    country={listingId.country}
                    category={listingId.category}
                    startDate={startDate}
                    endDate={endDate}
                    totalPrice={totalPrice}
                    booking={booking}
                />
            ))}
        </div>
    </>
  )
}

export default TripList
