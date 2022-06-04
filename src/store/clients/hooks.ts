import { useQuery } from "react-query";
import { parseClient } from "./parsers";
import { getClients } from "./api";
import { Client } from "./types";
import { DatabaseSize } from "store/types";

export const useClients = (databaseSize: DatabaseSize = 2000) => {
  const {
    data: clients = [],
    error = "No internet connection",
    isLoading,
    isError,
    isSuccess,
  } = useQuery<Client[], string>("clients", () =>
    getClients(databaseSize).then((res) => (res.data || []).map(parseClient))
  );

  return { clients, error, isLoading, isError, isSuccess };
};
