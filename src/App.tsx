import { useState } from "react";
import ApplicationList from "components/ApplicationList";
import Map from "components/Map";
import "./App.css";

const takeOpposite = (prevValue: "list" | "map") => {
  return prevValue === "list" ? "map" : "list";
};

function App() {
  const [view, setView] = useState<"map" | "list">("map");

  const toggleView = () => {
    setView(takeOpposite);
  };

  return (
    <>
      <button className="view-switcher--mobile" onClick={toggleView}>
        {takeOpposite(view)}
      </button>
      <div className="app__container">
        <ApplicationList view={view} />
        <Map view={view} />
      </div>
    </>
  );
}

export default App;
