import "./AddNewInputField";
import { EducationItem, ExperienceItem } from "./InputFields";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const NewEducationInput = ({ handleSetAppData, educationData }) => {
  const [showMoreState, setShowMoreState] = useState({});

  const toggleShowMore = (id) => {
    setShowMoreState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const addNewEducation = () => {
    const newId = uuidv4();
    handleSetAppData({
      type: "education",
      information: {
        id: newId,
      },
    });
  };
  console.log(educationData);
  return (
    <div>
      {educationData?.map((item, index) => (
        <div key={item?.id}>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleShowMore(item?.id);
            }}
          >
            {showMoreState[item?.id]
              ? `Hide ${
                  item?.schoolName ? item?.schoolName : `${index + 1} Education`
                }`
              : `Show ${
                  item?.schoolName ? item?.schoolName : `${index + 1} Education`
                }`}
          </button>
          {showMoreState[item?.id] && (
            <EducationItem
              initialData={item}
              handleSetAppData={handleSetAppData}
            />
          )}
        </div>
      ))}
      <button
        type="button"
        className="newInputFieldBtn"
        onClick={(e) => {
          e.preventDefault();
          addNewEducation();
        }}
      >
        +
      </button>
    </div>
  );
};

const NewExperienceInput = ({ handleSetAppData, experienceData }) => {
  const [showMoreState, setShowMoreState] = useState({});

  const toggleShowMore = (id) => {
    setShowMoreState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const addNewExperience = () => {
    const newId = uuidv4();
    handleSetAppData({
      type: "experience",
      information: {
        id: newId,
      },
    });
  };

  return (
    <div>
      {experienceData?.map((item, index) => (
        <div key={item?.id}>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleShowMore(item?.id);
            }}
          >
            {showMoreState[item?.id]
              ? `Hide ${
                  item?.company ? item?.company : `${index + 1} Experience`
                }`
              : `Hide ${
                  item?.company ? item?.company : `${index + 1} Experience`
                }`}
          </button>
          {showMoreState[item?.id] && (
            <ExperienceItem
              initialData={item}
              handleSetAppData={handleSetAppData}
            />
          )}
        </div>
      ))}
      <button
        type="button"
        className="newInputFieldBtn"
        onClick={(e) => {
          e.preventDefault();
          addNewExperience();
        }}
      >
        +
      </button>
    </div>
  );
};

export { NewEducationInput, NewExperienceInput };
