import { AxiosResponse } from "axios";
import { request } from "store/axios";
import { DatabaseSize } from "store/types";
import { Client } from "./types";

export const getClients = (
  databaseSize: DatabaseSize
): Promise<AxiosResponse<Client[]>> => {
  return request.get(`/api/${databaseSize}/clients.json`);
};
