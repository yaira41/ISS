import fs from "fs/promises";
import path from "path";
import { Country } from "../models/country.model";

export async function getCountriesNames(): Promise<string[]> {
  const data = await fs.readFile(
    path.join(__dirname, "../../data/countries.geojson"),
    "utf-8"
  );
  const countriesData: { features: Country[] } = JSON.parse(data);
  return countriesData.features.map((country) => country.properties.name);
}
