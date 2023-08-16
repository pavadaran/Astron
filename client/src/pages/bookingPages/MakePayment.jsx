const MakePayment = (props) => {
    const { currentPage, setCurrentPage } = props;

    return (
        <>
            <h1>Make Payment</h1>
            <button onClick={() => setCurrentPage(currentPage-1)}>Back</button>
        </>
    )
}

export default MakePayment;