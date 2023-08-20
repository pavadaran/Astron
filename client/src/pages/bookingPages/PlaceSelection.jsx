import { useContext } from "react";

import { BookingContext } from "../../context/BookingContext.jsx";

const PlaceSelection = (props) => {
    const { currentPage, setCurrentPage } = props;
    const { getBookingContext, setBookingContext } = useContext(BookingContext);

    return (
        <>
            <h1>Place Selection</h1>
            <button onClick={() => setCurrentPage(currentPage+1)}>Next</button>
            <button onClick={() => setCurrentPage(currentPage-1)}>Back</button>
        </>
    )
}

export default PlaceSelection;