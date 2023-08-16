import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Home</h1>
            <button onClick={() => navigate('/booking')}>Make Booking</button>
        </>
    )
}

export default HomePage;