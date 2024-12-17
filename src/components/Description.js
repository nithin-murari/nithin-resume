import React from "react";

import * as ApplicantData from "resumeData";

import icon_email from "icons/mail.svg";
import icon_mobile from "icons/mobile.svg";
import icon_location from "icons/location.svg";
import icon_linkedIn from "icons/linkedIn.svg";

function Description() {
  return (
    <div className="Description">
      <div className="Details__Basic">
        <div className="text__applicant">{ApplicantData.name}</div>
        <div className="text__designation">{ApplicantData.currDesignation}</div>
      </div>
      <div className="Details__Communication">
        <div className="email grid-comm">
          <a href={"mailto:" + ApplicantData.mailId}>{ApplicantData.mailId}</a>
          <img className="icon" src={icon_email} alt="email" />
        </div>
        <div className="mobile grid-comm">
          <a href={"tel:" + ApplicantData.mobileNum}>
            {ApplicantData.mobileNum.split("").splice(0, 3).join("") +
              " " +
              ApplicantData.mobileNum
                .split("")
                .splice(3, ApplicantData.mobileNum.length)
                .join("")}
          </a>
          <img className="icon" src={icon_mobile} alt="mobile" />
        </div>
        <div className="location grid-comm">
          <p>{ApplicantData.location}</p>
          <img className="icon" src={icon_location} alt="location" />
        </div>
        <div className="linkedIn grid-comm">
          <a href={ApplicantData.linkedIn.url}>
            {ApplicantData.linkedIn.displayName}
          </a>
          <img className="icon" src={icon_linkedIn} alt="linkedIn" />
        </div>
      </div>
      <div className="Description__Summary">
      Experienced professional with <strong>6+</strong> years in developing and delivering scalable applications to meet customer needs. Skilled in collaborating with clients to gather requirements, create plans, and enhance designs for improved usability and functionality.
      </div>
      {/* <div className="Hello_Anime"></div> */}
    </div>
  );
}

export default Description;
