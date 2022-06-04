import { useQuery } from "react-query";
import { parseApplication } from "./parsers";
import { getApplications } from "./api";
import { DatabaseSize } from "store/types";
import { Application } from "./types";

export const useApplications = (databaseSize: DatabaseSize = 2000) => {
  const {
    data: applications = [],
    error = "No internet connection",
    isLoading,
    isError,
    isSuccess,
  } = useQuery<Application[], string>("applications", () =>
    getApplications(databaseSize).then((res) =>
      (res.data || []).map(parseApplication)
    )
  );

  return { applications, error, isLoading, isError, isSuccess };
};
