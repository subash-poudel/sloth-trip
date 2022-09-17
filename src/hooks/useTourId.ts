import { useLocation } from "react-router-dom";
import { getCityAndTour } from "../utils";

export const useTourId = () => {
  const urlParams = useLocation().pathname.split("/");
  if (urlParams.length !== 2) {
    return { error: true, data: null };
  }
  const tourId = Number(urlParams[1]);
  if (!Number.isSafeInteger(tourId)) {
    return { error: true, data: null };
  }
  const data = getCityAndTour(tourId);
  if (!data) {
    return { error: true, data: null };
  }

  return { error: false, data };
};
