import "./MainPart.css";
import { ExperienceSection, EducationSection } from "./MainPartSections";
import { PersonalDetails } from "./ui/InputFields";

function MainPart({ personal, education, experience }) {
  const hasEducation = education && education.length > 0;
  const hasExperience = experience && experience.length > 0;
  return (
    <>
      <div>
        <div>
          <h1>{personal?.name ? personal?.name : "Full Name"}</h1>
          <img src="" alt="" />
        </div>
        <div className="personalInformation">
          <div>
            <i className="material-symbols-outlined">mail</i>
            <span>
              {personal?.email ? personal?.email : "email@example.com"}
            </span>
          </div>
          <div>
            <i className="material-symbols-outlined">call</i>
            <span>{personal?.phone ? personal?.phone : "Phone number"}</span>
          </div>
          <div>
            <i className="material-symbols-outlined">pin_drop</i>
            <span>
              {personal?.address ? personal?.address : "City, Country"}
            </span>
          </div>
        </div>
      </div>

      {/* send education as a prop to <Section />,
          education is actually an array of educations
          so you have to loop through it with map
      */}
      <div className="bottomMargin">
        {hasEducation && (
          <>
            <h2 className="sectionTitle">Education</h2>
            {education.map((educationItem, index) => (
              <EducationSection key={index} education={educationItem} />
            ))}
          </>
        )}
        {hasExperience && (
          <>
            <h2 className="sectionTitle">Experience</h2>
            {experience.map((experienceItem, index) => (
              <ExperienceSection key={index} experience={experienceItem} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export { MainPart };
