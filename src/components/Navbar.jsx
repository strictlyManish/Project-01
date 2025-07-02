import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center items-center gap-12">
      <NavLink
        to="/"
        className={(e) => (e.isActive ? "text-orange-600" : "text-white")}
      >
        Home
      </NavLink>
      <NavLink
        to="/recipes"
        className={(e) => (e.isActive ? "text-orange-600" : "text-white")}
      >
        Recipes
      </NavLink>

      <NavLink
        to="/about"
        className={(e) => (e.isActive ? "text-orange-600" : "text-white")}
      >
        About
      </NavLink>
      <NavLink
        to="/create"
        className={(e) => (e.isActive ? "text-orange-600" : "text-white")}
      >
        Create Recipes
      </NavLink>
    </div>
  );
}

export default Navbar;
