import { useContext } from "react";

import { BookingContext } from "../../context/BookingContext.jsx";

import "../../styles/BookingInfo.css"

const BookingInfo = (props) => {
    const { currentPage, setCurrentPage } = props;
    const { getBookingContext, setBookingContext } = useContext(BookingContext);

    const booking = getBookingContext();

    return (
        <>
            <div className="back-ground">
                <svg className="back-button" onClick={() => setCurrentPage(currentPage - 1)} xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0872 1.49539H9.71569C4.94039 1.49539 1.06924 5.36654 1.06924 10.1418V25.5133C1.06924 30.2886 4.94039 34.1598 9.71569 34.1598H25.0872C29.8625 34.1598 33.7336 30.2886 33.7336 25.5133V10.1418C33.7336 5.36654 29.8625 1.49539 25.0872 1.49539ZM34.6943 10.1418C34.6943 4.83595 30.3931 0.534668 25.0872 0.534668H9.71569C4.4098 0.534668 0.108521 4.83595 0.108521 10.1418V25.5133C0.108521 30.8192 4.4098 35.1205 9.71569 35.1205H25.0872C30.3931 35.1205 34.6943 30.8192 34.6943 25.5133V10.1418ZM20.9046 8.84146C21.0922 8.65386 21.3964 8.65386 21.584 8.84146C21.7716 9.02905 21.7716 9.33319 21.584 9.52079L13.2772 17.8276L21.584 26.1344C21.7716 26.322 21.7716 26.6261 21.584 26.8137C21.3964 27.0013 21.0922 27.0013 20.9046 26.8137L12.2582 18.1672C12.0706 17.9796 12.0706 17.6755 12.2582 17.4879L20.9046 8.84146Z" fill="#B34416" />
                </svg>
                <h1 className="heading">Planet Details</h1>
                <div className="cover-container">
                    <p className="name">{booking.planet}</p>
                </div>

                <div className="list">
                    <h4>Booking Information</h4>
                    <p>Travel Mode: </p>
                    <p>Spacecraft: </p>
                    <p>Passengers: </p>
                    <p>Departure: </p>
                    <p>Arrival: </p>
                </div>

                <div className="list">
                    <h4>Amount</h4>
                    <p>Ticket Fee: </p>
                    <p>Tax: </p>
                    <p><b>Total: </b></p>
                </div>
                <button className="continue-button" onClick={() => setCurrentPage(currentPage + 1)}>Continue</button>
            </div>
        </>
    )
}

export default BookingInfo;