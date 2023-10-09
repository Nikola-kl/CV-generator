import { Fragment, useCallback, useState, useEffect } from "react";
import { MainPart } from "./components/MainPart";
import {
  PersonalInput,
  EducationInput,
  ExperienceInput,
} from "./components/Form";
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
          // deconstruct existing state, so that we can modify record if found
          let previousState = [...state[data.type]];

          // find record index, by id which is uuid
          let educationIndex = state?.education?.findIndex(
            (item) => item?.id === data.information.id
          );

          // if index is not found, we create new entry
          if (educationIndex === -1) {
            return {
              ...state,
              [data.type]: [...state[data.type], { ...data.information }],
            };
          }

          if (data?.action === "delete") {
            return {
              ...state,
              [data.type]: previousState?.filter(
                (item) => item?.id !== data.information.id
              ),
            };
          }

          // deconstruct data to the index, so that we modify the correct entry
          previousState[educationIndex] = { ...data?.information };

          // set new state, with modified record
          return {
            ...state,
            [data.type]: [...previousState],
          };
        });
      }

      if (data?.type === "experience") {
        setAppData((state) => {
          let previousState = [...state[data.type]];
          let experienceIndex = state?.experience?.findIndex(
            (item) => item?.id === data.information.id
          );

          if (experienceIndex === -1) {
            return {
              ...state,
              [data.type]: [...state[data.type], { ...data.information }],
            };
          }

          if (data?.action === "delete") {
            return {
              ...state,
              [data.type]: previousState?.filter(
                (item) => item?.id !== data.information.id
              ),
            };
          }

          previousState[experienceIndex] = { ...data?.information };
          return {
            ...state,
            [data.type]: [...previousState],
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
        <EducationInput
          handleSetAppData={handleSetAppData}
          educationData={appData?.education}
        />
        <ExperienceInput
          handleSetAppData={handleSetAppData}
          experienceData={appData?.experience}
        />
      </div>
    </div>
  );
}

export default App;
