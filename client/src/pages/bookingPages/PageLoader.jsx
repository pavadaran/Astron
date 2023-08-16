import React, { Fragment, useState, useEffect, Suspense } from "react";

import { getBookingFlow } from "../../configs/booking_flow.js";

/**
 * Display different components based on the index.
 */
const PageLoader = () => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Get the current page component
  const { Component, ...props } =
    !isLoading && pages.bookingPages.find((item) => item.index === currentPage);

  useEffect(() => {
    setPages(getBookingFlow());
    setIsLoading(false);
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  return (
    // For lazy loading the components
    <Suspense fallback={<Loading />}>
      <Fragment key={props.index}>
        {!isLoading && (
          <Component
            {...props}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {isLoading && <Loading />}
      </Fragment>
    </Suspense>
  );
};

export default PageLoader;
