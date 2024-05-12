import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-row max-sm:flex-col justify-between items-center">
        <div className="flex flex-col">
          <p className="text-3xl font-bold">Have a project in Mind?</p>
          <p className="text-3xl font-bold">Let's build something together!</p>
        </div>
        <Link className="btn" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};
export default CTA;
