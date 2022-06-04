import { useApplications } from "store/apps/hooks";
import { useClients } from "store/clients/hooks";
import { Client } from "store/clients/types";
import "./style.css";

type Props = {
  view: "list" | "map";
};

function ApplicationList({ view }: Props) {
  const { applications, error, isLoading, isError } = useApplications();
  const {
    clients,
    isLoading: isClientsLoading,
    isError: isClientError,
    error: clientError,
  } = useClients();

  if (isLoading || isClientsLoading) {
    return <>loading...</>;
  }

  if (isError || isClientError) {
    return <>{error || clientError}</>;
  }

  const getClient = (clientId: number): Client | undefined => {
    return clients.find((client) => client.id === clientId);
  };

  return (
    <div
      className={`applications__container ${
        view === "map" ? "applications__container--hidden" : ""
      }`}
    >
      {applications.length > 0 ? (
        <>
          {applications.map((application) => (
            <div key={application.id} className="applications__container__item">
              <p>Client: {getClient(application.clientId)?.name || "-"}</p>
              <p>Type: {application.type}</p>
              <p>Price: {application.price} ₸</p>
            </div>
          ))}
        </>
      ) : (
        <p>no applications</p>
      )}
    </div>
  );
}

export default ApplicationList;
