import { useState } from "react";
import { NewEducationInput, NewExperienceInput } from "./AddNewInputField";

const EducationDetailsMinimized = ({ handleSetAppData, educationData }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore);
    console.log("show");
  };

  return (
    <div>
      <button
        className="delete-education"
        onClick={(e) => {
          e.preventDefault();
          handleMoreClick();
        }}
      >
        Show Education
      </button>
      {showMore && (
        <NewEducationInput
          handleSetAppData={handleSetAppData}
          educationData={educationData}
        />
      )}
    </div>
  );
};

export { EducationDetailsMinimized };
