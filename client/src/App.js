import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import HomePage from "./pages/commonPages/HomePage.jsx";
import BookingCreation from "./pages/bookingPages/BookingCreation.jsx";
import FourOhFourError from "./pages/errorPages/FourOhFour.jsx";
import GenericError from "./pages/errorPages/GenericError.jsx";

import "./styles/App.css";

function App() {

  return (
    <ErrorBoundary fallback={<GenericError />}>
      <Router basename="astron">
        <div className="App">
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/booking" element={<BookingCreation />} />
            <Route path="/*" element={<FourOhFourError />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
