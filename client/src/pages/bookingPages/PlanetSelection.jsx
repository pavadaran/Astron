const PlanetSelection = (props) => {
    const { currentPage, setCurrentPage } = props;

    return (
        <>
            <h1>Planet Selection</h1>
            <button onClick={() => setCurrentPage(currentPage+1)}>Next</button>
        </>
    )
}

export default PlanetSelection;