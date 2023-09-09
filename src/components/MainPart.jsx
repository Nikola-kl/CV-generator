import "./MainPart.css";
import { Section } from "./MainPartSections";

function MainPart({ personal, education }) {
  return (
    <>
      <div>
        <div>
          <h1>{personal?.name ? personal?.name : "Name Lastname"}</h1>
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
            <span>{personal?.phone ? personal?.phone : "+31212215"}</span>
          </div>
          <div>
            <i className="material-symbols-outlined">pin_drop</i>
            <span>{personal?.adress ? personal?.adress : "City, Country"}</span>
          </div>
        </div>
      </div>

      {/* send education as a prop to <Section />,
          education is actually an array of educations
          so you have to loop through it with map
      */}
      <Section />
    </>
  );
}

export { MainPart };
