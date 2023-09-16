import { Fragment, useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { MainPart } from "./components/MainPart";
import {
  PersonalInput,
  EducationInput,
  ExperienceInput,
} from "./components/form";
import "./styles/App.css";

function App() {
  const [appData, setAppData] = useState({
    personal: {},
    education: [],
    experience: [],
  });

  // console.log(appData);

  const handleSetAppData = useCallback(
    (data) => {
      // data should have a type, either "personal" or "education"
      // data should also have, the object that you want to set
      // write an if statement to update either personal or education
      // in app data

      if (data?.type === "personal") {
        setAppData((state) => {
          // [data.type] is actually personal as a key {"personal": {}}
          return { ...state, [data.type]: { ...data.information } };
        });
      }
      if (data?.type === "education") {
        setAppData((state) => {
          return {
            ...state,
            [data.type]: [...state[data.type], { ...data.information }],
          };
        });
      }
      if (data?.type === "experience") {
        setAppData((state) => {
          return {
            ...state,
            [data.type]: [...state[data.type], { ...data.information }],
          };
        });
      }
    },
    [setAppData]
  );
  return (
    <div className="borderSpacing layout">
      <div className="leftPart">
        <MainPart
          personal={appData?.personal}
          education={appData?.education}
          experience={appData?.experience}
        />
      </div>

      <div className="rightPart">
        <PersonalInput handleSetAppData={handleSetAppData} />
        <EducationInput handleSetAppData={handleSetAppData} />
        <ExperienceInput handleSetAppData={handleSetAppData} />
      </div>
    </div>
  );
}

export default App;
