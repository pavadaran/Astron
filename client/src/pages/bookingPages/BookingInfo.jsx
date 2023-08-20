import { useContext } from "react";

import { BookingContext } from "../../context/BookingContext.jsx";

const BookingInfo = (props) => {
    const { currentPage, setCurrentPage } = props;
    const { getBookingContext, setBookingContext } = useContext(BookingContext);

    return (
        <>
            <h1>Booking Information</h1>
            <button onClick={() => setCurrentPage(currentPage+1)}>Next</button>
            <button onClick={() => setCurrentPage(currentPage-1)}>Back</button>
        </>
    )
}

export default BookingInfo;