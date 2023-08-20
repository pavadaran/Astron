import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import HomePage from "./pages/commonPages/HomePage.jsx";
import BookingCreation from "./pages/bookingPages/BookingCreation.jsx";
import FourOhFourError from "./pages/errorPages/FourOhFour.jsx";
import GenericError from "./pages/errorPages/GenericError.jsx";
//import Medical from "./pages/commonPages/Medical.jsx";

import "./styles/App.css";

function App() {

  return (
    <ErrorBoundary fallback={<GenericError />}>
      <Router basename="astron">
        <div className="App back-ground">
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/booking" element={<BookingCreation />} />
            <Route path="/*" element={<FourOhFourError />} />
            {/* <Route path="/medical" element={<Medical />} /> */}
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
