import { AxiosResponse } from "axios";
import { request } from "store/axios";
import { DatabaseSize } from "store/types";
import { ApplicationRaw } from "./types";

export const getApplications = (
  databaseSize: DatabaseSize
): Promise<AxiosResponse<ApplicationRaw[]>> => {
  return request.get(`/api/${databaseSize}/apps.json`);
};
