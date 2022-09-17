import cities from "./data.json";
import { City, Tour } from "./models/City";

export function getCities(): City[] {
  return cities as City[];
}

export function getCityAndTour(
  tourId: number
): { city: City; tour: Tour } | null {
  for (let city of getCities()) {
    for (let tour of city.tours) {
      if (tour.id === tourId) {
        return { city, tour };
      }
    }
  }
  return null;
}
