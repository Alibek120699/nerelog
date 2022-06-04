import { useClients } from "store/clients/hooks";

function Clients() {
  const { clients, error, isLoading, isError } = useClients();

  if (isLoading) {
    return <>loading...</>;
  }

  if (isError) {
    return <>{error}</>;
  }

  return (
    <div className="clients__container">
      {clients.length > 0 ? (
        <>
          {clients.map((client) => (
            <div key={client.id}>
              <p>{client.name}</p>
              <p>{client.phone}</p>
            </div>
          ))}
        </>
      ) : (
        <p>no clients</p>
      )}
    </div>
  );
}

export default Clients;
