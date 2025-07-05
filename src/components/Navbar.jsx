import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-2 sticky top-0 backdrop-blur-sm">
      <h2 className="font-extralight text-3xl">The Royal <span className="text-orange-500 font-bold">Chairoom</span></h2>
      <div className="flex gap-10 font-smibol">
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
    </div>
  );
}

export default Navbar;
