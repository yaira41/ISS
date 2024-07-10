export interface Country {
  type: string;
  id: string;
  properties: {
    name: string;
  };
  geometry: {
    type: string;
    coordinates: Array<[number, number][]>;
  };
}
