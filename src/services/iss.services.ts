import axios from "axios";
import { getCountries } from "./countries.services";
import { isPointInPolygon } from "../utils/geometry.utils";
import { IssLocation } from "../models/issLocation.models";

export async function getIssCoordinates() {
  const { data } = await axios.get("http://api.open-notify.org/iss-now.json");
  return {
    latitude: parseFloat(data.iss_position.latitude),
    longitude: parseFloat(data.iss_position.longitude),
  } as IssLocation;
}

export async function getIssCountry(): Promise<string> {
  const issLocation = await getIssCoordinates();

  const countries = await getCountries();
  for (const country of countries) {
    if (isPointInPolygon(issLocation, country.geometry.coordinates[0])) {
      return country.properties.name;
    }
  }

  return "Ocean";
}
