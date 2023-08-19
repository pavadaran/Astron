import mars from '../../../site/public/images/planets/mars.png';
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '../../firebase-config.js';

const PlaceSelection = (props) => {
    const { currentPage, setCurrentPage } = props;
    const [place, setPlace] = useState([]);
    const placeCollectionRef = collection(db, "planetplaces")
    const [placeIndex, setPlaceIndex] = useState(0);

    useEffect(() =>  {
        const getPlaces = async () => {
            try {
                const planetQuery = query(placeCollectionRef, where("planet", "==", "Mercury"));
                const querySnapshot = await getDocs(planetQuery);
                const data = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
                setPlace(data);
            } catch (error) {
                alert("Error fetching data");
            }
        }; 
        getPlaces();
    },[]);

    const goToNextPlace = () => {
        if (placeIndex < place.length - 1) {
            setPlaceIndex(placeIndex + 1);
        }
    };

    const goToPreviousPlace = () => {
        if (placeIndex > 0) {
            setPlaceIndex(placeIndex - 1);
        }
    };


    // const myStyle = {
    //     // color: "white",
    //     fontFamily: "Verdana"
    // }
    return (
        <>
        <div >
        <button onClick={() => setCurrentPage(currentPage-1)}>Back</button>
            <h1 >Place Selection</h1>
            <h2>Mars</h2>
            <img src={mars} alt="Mars" />

            {place.length > 0 && (
                    <div>
                        <h3>{place[placeIndex].place}</h3>
                        <p>Area {place[placeIndex].area} km</p><br />
                        <p>Temperature {place[placeIndex].temperature}&deg;C</p><br />
                        <p>Gravity {place[placeIndex].gravity}g</p><br />
                    </div>
                )}

                <button onClick={goToPreviousPlace}>Previous</button>
                <button onClick={goToNextPlace}>Next</button>
            
            <button onClick={() => setCurrentPage(currentPage+1)}>Continue</button>
        </div>
       
            
        </>
    )
}

export default PlaceSelection;