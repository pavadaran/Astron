import { lazy } from "react";

const PlanetSelection = lazy(() => import("../pages/bookingPages/PlanetSelection.jsx"));
const PlanetDetails = lazy(() => import("../pages/bookingPages/PlanetDetails.jsx"));
const PlaceSelection = lazy(() => import("../pages/bookingPages/PlaceSelection.jsx"));
const BookTickets = lazy(() => import("../pages/bookingPages/BookTickets.jsx"));
const AvailableTickets = lazy(() => import("../pages/bookingPages/AvailableTickets.jsx"));
const TransportInfo = lazy(() => import("../pages/bookingPages/TransportInfo.jsx"));
const BookingInfo = lazy(() => import("../pages/bookingPages/BookingInfo.jsx"));
const MakePayment = lazy(() => import("../pages/bookingPages/MakePayment.jsx"));

/**
 * File to configure the booking pages and their order.
 */
export const getBookingFlow = () => {
  return {
    bookingPages: [
      {
        index: 1,
        Component: PlanetSelection
      },
      {
        index: 2,
        Component: PlanetDetails
      },
      {
        index: 3,
        Component: PlaceSelection
      },
      {
        index: 4,
        Component: BookTickets
      },
      {
        index: 5,
        Component: AvailableTickets
      },
      {
        index: 6,
        Component: TransportInfo
      },
      {
        index: 7,
        Component: BookingInfo
      },
      {
        index: 8,
        Component: MakePayment
      },
    ]
  };
};
