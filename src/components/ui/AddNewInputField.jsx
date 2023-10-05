import "./AddNewInputField";
import { EducationItem, ExperienceItem } from "./InputFields";
import { v4 as uuidv4 } from "uuid";

const NewEducationInput = ({ handleSetAppData, educationData }) => {
  const addNewEducation = () => {
    handleSetAppData({
      type: "education",
      information: {
        id: uuidv4(),
      },
    });
  };

  return (
    <div>
      {educationData?.map((item) => (
        <EducationItem
          key={item?.id}
          initialData={item}
          handleSetAppData={handleSetAppData}
        />
      ))}
      <button
        type="button"
        className="newInputFieldBtn"
        onClick={(e) => {
          e.preventDefault();
          console.log("hey");
          addNewEducation();
        }}
      >
        +
      </button>
    </div>
  );
};

const NewExperienceInput = ({ handleSetAppData, experienceData }) => {
  const addNewExperience = () => {
    handleSetAppData({
      type: "experience",
      information: {
        id: uuidv4(),
      },
    });
  };
  return (
    <div>
      {experienceData?.map((item) => (
        <ExperienceItem
          key={item?.id}
          initialData={item}
          handleSetAppData={handleSetAppData}
        />
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
