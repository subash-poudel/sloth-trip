import cities from "./data.json";
import { City } from "./models/City";

export function getCities(): City[] {
  return cities as City[];
}
