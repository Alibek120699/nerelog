import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useApplications } from "store/apps/hooks";
import { useClients } from "store/clients/hooks";
import { Client } from "store/clients/types";
import "./style.css";

const center: LatLngExpression = [43.238949, 76.889709];

type Props = {
  view: "list" | "map";
};

function Map({ view }: Props) {
  const { applications } = useApplications();
  const { clients } = useClients();

  const getClient = (clientId: number): Client | undefined => {
    return clients.find((client) => client.id === clientId);
  };

  return (
    <div
      id="map"
      className={`map__container ${
        view === "list" ? "map__container--hidden" : ""
      }`}
    >
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {applications.map((application) => (
          <Marker
            key={application.id}
            position={[application.coords.lat, application.coords.long]}
          >
            <Popup>
              <p>Client: {getClient(application.clientId)?.name || "-"}</p>
              <p>Price: {application.price} ₸</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
