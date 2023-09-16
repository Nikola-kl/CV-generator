import { Fragment, useState } from "react";
import "./Form.css";

// CHANGE THIS FUNCTIONALITY SO THAT YOU JUST UPDATE THE PERSONAL DETAILS WITHOUT ADDING BUTTON
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
const EducationInput = ({ handleSetAppData }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <form action="" className="formFlex">
      <button className="buttonTitle" type="button" onClick={handleMoreClick}>
        <h2>Education</h2>
      </button>
      {showMore && <EducationDetails handlesetAppData={handleSetAppData} />}
    </form>
  );
};

const ExperienceInput = ({ handleSetAppData }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <form action="" className="formFlex">
      <button className="buttonTitle" type="button" onClick={handleMoreClick}>
        <h2>Experience</h2>
      </button>
      {showMore && <ExperienceDetails handlesetAppData={handleSetAppData} />}
    </form>
  );
};

const PersonalDetails = ({ handleSetAppData }) => {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const change = (event) => {
    const { name, value } = event.target;

    setPersonal({ ...personal, [name]: value });

    handleSetAppData({
      type: "personal",
      information: { ...personal, [name]: value },
    });
  };

  const addFunction = () => {
    handleSetAppData({ type: "personal", information: { ...personal } });
  };

  return (
    <>
      <section className="formFlex">
        <label htmlFor="name">
          <span>Full Name: </span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={personal.name}
          onChange={change}
          placeholder="Full Name"
          required
        />

        <label htmlFor="email">
          <span>Email: </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={personal.email}
          onChange={change}
          placeholder="Email"
        />

        <label htmlFor="number">
          <span>Phone Number: </span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={personal.phone}
          onChange={change}
          placeholder="Phone Number"
          maxLength="15"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />

        <label htmlFor="address">
          <span>Address: </span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={personal.address}
          onChange={change}
          placeholder="Address"
        />
      </section>
      {/* <Actions addFunction={addFunction} /> */}
    </>
  );
};

const EducationDetails = ({ handlesetAppData }) => {
  const [education, setEducation] = useState({
    schoolName: "",
    degree: "",
    start: "",
    end: "",
    location: "",
  });

  const change = (event) => {
    const { name, value } = event.target;
    setEducation({ ...education, [name]: value });
  };

  const addFunction = () => {
    handlesetAppData({ type: "education", information: { ...education } });
  };

  return (
    <>
      <section className="formFlex">
        <label htmlFor="name">
          <span>School: </span>
        </label>
        <input
          type="text"
          id="name"
          name="schoolName"
          value={education.schoolName}
          onChange={change}
          placeholder="School Name"
        />

        <label htmlFor="degree">
          <span>Degree: </span>
        </label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={education.degree}
          onChange={change}
          placeholder="Degree"
        />
        <div className="datesInput">
          <div>
            <label htmlFor="start">
              <span>Start Date: </span>
            </label>
            <input
              type="date"
              id="start"
              name="start"
              value={education.start}
              onChange={change}
              placeholder="Start Date"
            />
          </div>
          <div>
            <label htmlFor="end">
              <span>End Date: </span>
            </label>
            <input
              type="date"
              id="end"
              name="end"
              value={education.end}
              onChange={change}
              placeholder="End Date"
              max="2025-12-31"
            />
          </div>
        </div>

        <label htmlFor="location">
          <span>Location: </span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={education.location}
          onChange={change}
          placeholder="Location"
        />
      </section>
      <Actions addFunction={addFunction} />
    </>
  );
};

const ExperienceDetails = ({ handlesetAppData }) => {
  const [experience, setExperience] = useState({
    companyName: "",
    title: "",
    start: "",
    end: "",
    location: "",
    description: "",
  });

  const change = (event) => {
    const { name, value } = event.target;
    setExperience({ ...experience, [name]: value });
  };

  const addFunction = () => {
    handlesetAppData({ type: "experience", information: { ...experience } });
  };

  return (
    <>
      <section className="formFlex">
        <label htmlFor="name">
          <span>Company: </span>
        </label>
        <input
          type="text"
          id="name"
          name="companyName"
          value={experience.companyName}
          onChange={change}
          placeholder="Company"
        />

        <label htmlFor="title">
          <span>Job Title: </span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={experience.title}
          onChange={change}
          placeholder="Job Title"
        />
        <div className="datesInput">
          <div>
            <label htmlFor="start">
              <span>Start Date: </span>
            </label>
            <input
              type="date"
              id="start"
              name="start"
              value={experience.start}
              onChange={change}
              placeholder="Start Date"
            />
          </div>
          <div>
            <label htmlFor="end">
              <span>End Date: </span>
            </label>
            <input
              type="date"
              id="end"
              name="end"
              value={experience.end}
              onChange={change}
              placeholder="End Date"
              max="2025-12-31"
            />
          </div>
        </div>

        <label htmlFor="location">
          <span>Location: </span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={experience.location}
          onChange={change}
          placeholder="Location"
        />

        <label htmlFor="description">
          <span>Job Description: </span>
        </label>
        <textarea
          type="textarea"
          id="description"
          name="description"
          value={experience.description}
          onChange={change}
          placeholder="description"
        />
      </section>
      <Actions addFunction={addFunction} />
    </>
  );
};

const Actions = ({ addFunction, removeFunction }) => {
  const [clickCount, setClickCount] = useState(0);
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button
        type="submit"
        className="add"
        onClick={(e) => {
          e.preventDefault();
          addFunction();
          handleButtonClick();
        }}
      >
        Add
      </button>
      <button
        type="button"
        className="remove"
        onClick={(e) => {
          e.preventDefault();
          removeFunction();
        }}
      >
        Remove
      </button>
    </div>
  );
};

export { PersonalDetails, PersonalInput, EducationInput, ExperienceInput };
