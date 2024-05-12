import { experiences, skills } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container w-full h-full">
      <div>
        <h1 className="head-text">
          Hello I'm{" "}
          <span className="blue-gradient_text font-bold drop-shadow-xl">
            Harsh Chaudhary
          </span>
        </h1>
        <p className="mt-5 text-slate-500">
          Frontend developer based in India, focused on creating immersive web
          experiences through clean code and intuitive design. Dedicated to
          continuous learning and enhancing user interactions through modern
          technologies like React and CSS frameworks.
        </p>
      </div>

      <div className="py-10">
        <h3 className="subhead-text">My Skills</h3>

        <div className="flex flex-wrap gap-12 mt-10">
          {skills.map((skill, index) => (
            <div key={`skill-${index}`} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex items-center justify-center">
                <img
                  title={skill.name}
                  src={skill.imageUrl}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10">+
        <h3 className="subhead-text">Work Experience</h3>
        <p className="mt-5 text-slate-500">
          Extensive experience in frontend development, delivering
          pixel-perfect, responsive web solutions. Proven track record of
          collaborating with cross-functional teams to translate design concepts
          into robust code, optimizing user experience and performance.
        </p>

        <div className="flex flex-wrap gap-12 mt-10">
          <VerticalTimeline>
            {experiences.map((experience, i) => (
              <VerticalTimelineElement
                key={`experience-${i}`}
                className="vertical-timeline-element--work"
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                date={experience.date}
                iconStyle={{
                  backgroundColor: experience.iconBg,
                }}
                icon={
                  <div className="flex justify-center items-center h-full w-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
              >
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <h4 className="font-medium text-black-500">
                  {experience.company_name}
                </h4>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-${index}`} className="text-black-500/50 font-normal pl-1 text-small">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
