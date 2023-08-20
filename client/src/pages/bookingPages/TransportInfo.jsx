import { useContext } from "react";

import { BookingContext } from "../../context/BookingContext.jsx";

const TransportInfo = (props) => {
    const { currentPage, setCurrentPage } = props;
    const { getBookingContext, setBookingContext } = useContext(BookingContext);

    return (
        <>
            <h1>Transport Information</h1>
            <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            <button onClick={() => setCurrentPage(currentPage - 1)}>Back</button>
        </>
    )
}

export default TransportInfo;