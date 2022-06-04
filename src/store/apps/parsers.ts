import { ApplicationRaw, Application } from "./types";

export const parseApplication = (raw: ApplicationRaw): Application => {
  const { client_id, ...rest } = raw;

  return {
    ...rest,
    clientId: client_id,
  };
};
