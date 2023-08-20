import { useNavigate } from 'react-router-dom';

import "../../styles/PlanetDetails.css"

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="back-ground">
            <h1>Home</h1>
            <button onClick={() => navigate('/booking')}>Make Booking</button>
        </div>
    )
}

export default HomePage;