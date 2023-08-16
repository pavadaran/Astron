import React from "react";

import "../../styles/App.css";

/**
 * Generic Error Page.
 */
const GenericError = () => {
    return (
        <div className="App">
            <div className="display">
                <h1>Oops! Something went wrong.</h1>
                <p>
                    We're sorry, but we're unable to complete your request at this time. Please try again later.
                </p>
            </div>
        </div>
    );
};

export default GenericError;
