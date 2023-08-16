const BookingInfo = (props) => {
    const { currentPage, setCurrentPage } = props;

    return (
        <>
            <h1>Booking Information</h1>
            <button onClick={() => setCurrentPage(currentPage+1)}>Next</button>
            <button onClick={() => setCurrentPage(currentPage-1)}>Back</button>
        </>
    )
}

export default BookingInfo;