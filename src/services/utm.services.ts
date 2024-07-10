import proj4 from "proj4";
import { getIssCoordinates } from "./iss.services";

export async function getIssUtmLocation(): Promise<{
  easting: number;
  northing: number;
  zone: number;
  hemisphere: string;
}> {
  const issLocation = await getIssCoordinates();

  const zone = Math.floor((issLocation.longitude + 180) / 6) + 1;
  const hemisphere = issLocation.latitude >= 0 ? "N" : "S";

  const utmProjection = `+proj=utm +zone=${zone} ${
    hemisphere === "S" ? "+south" : ""
  }`;
  const [easting, northing] = proj4("EPSG:4326", utmProjection, [
    issLocation.longitude,
    issLocation.latitude,
  ]);

  return { easting, northing, zone, hemisphere };
}
