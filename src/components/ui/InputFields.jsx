import { useState } from "react";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

const PersonalDetails = ({ handleSetAppData }) => {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handlePersonalInfoChange = (event) => {
    setPersonal({ ...personal, [event.target.name]: event.target.value });

    handleSetAppData({
      type: "personal",
      information: { ...personal, [event.target.name]: event.target.value },
    });
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
          onChange={handlePersonalInfoChange}
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
          onChange={handlePersonalInfoChange}
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
          onChange={handlePersonalInfoChange}
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
          onChange={handlePersonalInfoChange}
          placeholder="Address"
        />
      </section>
    </>
  );
};

function EducationItem({ idKey, handleSetAppData, initialData }) {
  const [education, setEducation] = useState(
    initialData
      ? { ...initialData }
      : {
          id: uuidv4(),
          schoolName: "",
          degreeName: "",
          start: "",
          end: "",
          location: "",
        }
  );

  function handleEducationChange(event) {
    setEducation({ ...education, [event.target.name]: event.target.value });
    handleSetAppData({
      type: "education",
      information: { ...education, [event.target.name]: event.target.value },
    });
  }

  const handleDelete = () => [
    handleSetAppData({
      type: "education",
      information: { ...education },
      action: "delete",
    }),
  ];

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
          onChange={handleEducationChange}
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
          onChange={handleEducationChange}
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
              onChange={handleEducationChange}
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
              onChange={handleEducationChange}
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
          onChange={handleEducationChange}
          placeholder="Location"
        />
      </section>
      <button
        className="delete-education"
        onClick={(e) => {
          e.preventDefault();
          handleDelete(idKey);
        }}
      ></button>
    </>
  );
}

function ExperienceItem({ idKey, handleSetAppData, initialData }) {
  const [experience, setExperience] = useState(
    initialData
      ? { ...initialData }
      : {
          id: uuidv4(),
          company: "",
          position: "",
          start: "",
          end: "",
          location: "",
          description: "",
        }
  );

  function handleExperienceChange(event) {
    setExperience({ ...experience, [event.target.name]: event.target.value });
    handleSetAppData({
      type: "experience",
      information: { ...experience, [event.target.name]: event.target.value },
    });
  }

  const handleDelete = () => [
    handleSetAppData({
      type: "experience",
      information: { ...experience },
      action: "delete",
    }),
  ];

  return (
    <>
      <section className="formFlex">
        <label htmlFor="name">
          <span>Company: </span>
        </label>
        <input
          type="text"
          id="name"
          name="company"
          value={experience.company}
          onChange={handleExperienceChange}
          placeholder="Company Name"
        />

        <label htmlFor="position">
          <span>Position: </span>
        </label>
        <input
          type="text"
          id="position"
          name="position"
          value={experience.position}
          onChange={handleExperienceChange}
          placeholder="Position"
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
              onChange={handleExperienceChange}
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
              onChange={handleExperienceChange}
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
          onChange={handleExperienceChange}
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
          onChange={handleExperienceChange}
          placeholder="Description"
        />
      </section>
      <button
        className="delete-education"
        onClick={(e) => {
          e.preventDefault();
          handleDelete(idKey);
        }}
      ></button>
    </>
  );
}

export { PersonalDetails, EducationItem, ExperienceItem };
