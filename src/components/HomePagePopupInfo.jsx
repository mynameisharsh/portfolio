import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ title, link, buttonText }) => {
  return (
    <div className="info-box">
      <p className="font-medium text-center">{title}</p>
      <Link className="neo-brutalism-white neo-btn" to={link}>
        {buttonText} <img src={arrow} />
      </Link>
    </div>
  );
};

const information = {
  1: (
    <div className="text-xl text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am <span className="font-semibold">Harsh</span>. <br />
      Software Engineer from India [🇮🇳].
    </div>
  ),
  2: (
    <InfoBox
      title="Worked in various projects and picked up many skills along the way"
      link="/about"
      buttonText="Learn More"
    />
  ),
  3: (
    <InfoBox
      title="Led multiple projects to success. Learn more about my projects"
      link="/about"
      buttonText="Take a visit"
    />
  ),
  4: (
    <InfoBox
      title="Let's build amazing React applications together!"
      link="/contact"
      buttonText="Let's talk"
    />
  ),
};

const HomePagePopupInfo = ({ currentStage }) => {
  return information[currentStage] || null;
};

export default HomePagePopupInfo;
