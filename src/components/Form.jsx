import { Fragment, useState } from "react";
import { NewEducationInput, NewExperienceInput } from "./ui/AddNewInputField";
import { PersonalDetails } from "./ui/InputFields";
import "./Form.css";

const PersonalInput = ({ handleSetAppData }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <form action="" className="formFlex">
      <button className="buttonTitle" type="button" onClick={handleMoreClick}>
        <h2>Personal Details</h2>
      </button>
      {showMore && <PersonalDetails handleSetAppData={handleSetAppData} />}
    </form>
  );
};

const EducationInput = ({ handleSetAppData, educationData }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <form action="" className="formFlex">
      <button className="buttonTitle" type="button" onClick={handleMoreClick}>
        <h2>Education</h2>
      </button>
      {showMore && (
        <NewEducationInput
          handleSetAppData={handleSetAppData}
          educationData={educationData}
        />
      )}
    </form>
  );
};

const ExperienceInput = ({ handleSetAppData, experienceData }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <form action="" className="formFlex">
      <button className="buttonTitle" type="button" onClick={handleMoreClick}>
        <h2>Experience</h2>
      </button>
      {showMore && (
        <NewExperienceInput
          handleSetAppData={handleSetAppData}
          experienceData={experienceData}
        />
      )}
    </form>
  );
};

export { PersonalDetails, PersonalInput, EducationInput, ExperienceInput };
