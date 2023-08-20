import { useContext } from "react";

import { BookingContext } from "../../context/BookingContext.jsx";

const MakePayment = (props) => {
    const { currentPage, setCurrentPage } = props;
    const { getBookingContext, setBookingContext } = useContext(BookingContext);

    return (
        <>
            <h1>Make Payment</h1>
            <button onClick={() => setCurrentPage(currentPage-1)}>Back</button>
        </>
    )
}

export default MakePayment;