import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="rounded-lg font-bold text-xl bg-white h-10 w-10 shadow-md flex items-center justify-center "
      >
        <p className="blue-gradient_text">HC</p>
      </NavLink>
      <nav className="flex gap-7 text-lg font-medium">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
