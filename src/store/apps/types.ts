type Coordinate = {
  lat: number;
  long: number;
};

export type ApplicationRaw = {
  id: number;
  type: "pickup" | "delivery";
  price: number;
  coords: Coordinate;
  client_id: number;
};

export type Application = {
  id: number;
  type: "pickup" | "delivery";
  price: number;
  coords: Coordinate;
  clientId: number;
};
