import { Fragment, useState } from "react";
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

const PersonalDetails = ({ handleSetAppData }) => {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });

  const change = (event) => {
    const { name, value } = event.target;
    setPersonal({ ...personal, [name]: value });
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

        <label htmlFor="adress">
          <span>Adress: </span>
        </label>
        <input
          type="text"
          id="adress"
          name="adress"
          value={personal.adress}
          onChange={change}
          placeholder="Adress"
        />
      </section>
      <Actions addFunction={addFunction} />
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

const Actions = ({ addFunction, removeFunction }) => {
  return (
    <div>
      <button
        type="submit"
        className="add"
        onClick={(e) => {
          e.preventDefault();
          addFunction();
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

export { PersonalInput, EducationInput };
