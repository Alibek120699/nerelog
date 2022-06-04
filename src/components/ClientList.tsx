import { useClients } from "store/clients/hooks";

function Clients() {
  const { clients, error, isLoading, isError, isSuccess } = useClients();
  console.log({ clients, error, isLoading, isError, isSuccess });

  return <>Clients</>;
}

export default Clients;
