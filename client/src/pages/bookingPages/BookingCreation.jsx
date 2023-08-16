import PageLoader from "./PageLoader.jsx";

import { BookingContext } from "../../context/BookingContext.jsx";

/**
 * Pass the BookingContext to the PageLoader.
 */
const BookingCreation = () => {
  let bookingContext = {};

  const setBookingContext = (value) => {
    bookingContext = { ...bookingContext, ...value };
  };

  const getBookingContext = () => {
    return bookingContext;
  };

  return (
    <BookingContext.Provider value={{ getBookingContext, setBookingContext }}>
      <PageLoader />
    </BookingContext.Provider>
  )
}

export default BookingCreation;
