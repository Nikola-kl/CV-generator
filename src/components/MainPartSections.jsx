import { Fragment } from "react";

function EducationSection({ education }) {
  console.log({ education });
  return (
    <>
      <div className="bottomMargin">
        <div className="section">
          <div className="date">
            <p>
              {education.start}-{education.end}
            </p>
          </div>
          <div>
            <p className="experienceInfoCompany">{education.schoolName}</p>
            <p className="experienceInfoTitle">{education.degree}</p>
            <p className="experienceInfoText">{education.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function ExperienceSection({ experience }) {
  console.log(experience);
  return (
    <>
      <div className="section">
        <div className="date">
          <p>
            {experience.start}-{experience.end}
          </p>
        </div>
        <div>
          <p className="experienceInfoCompany">{experience.company}</p>
          <p className="experienceInfoTitle">{experience.title}</p>
          <p className="experienceInfoTitle">{experience.location}</p>
          <p className="experienceInfoText">{experience.description}</p>
        </div>
      </div>
    </>
  );
}

export { EducationSection, ExperienceSection };
