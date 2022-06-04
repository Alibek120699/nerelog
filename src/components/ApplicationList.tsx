import { useApplications } from "store/apps/hooks";

function ApplicationList() {
  const { applications, error, isLoading, isError, isSuccess } =
    useApplications();
  console.log({ applications, error, isLoading, isError, isSuccess });

  return <>Application List</>;
}

export default ApplicationList;
