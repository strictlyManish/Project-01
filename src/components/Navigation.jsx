import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-3xl cursor-pointer">Restro</h3>
      <div className="text-1xl font-normal flex gap-6">
        <NavLink to="/" className={(e)=> e.isActive ? 'text-yellow-400 border-b':'text-white'}>Home</NavLink>
        <NavLink to="/recipes" className={(e)=> e.isActive ? 'text-yellow-400 border-b':'text-white'}>Recipes</NavLink>
        <NavLink to="/createrecipes" className={(e)=> e.isActive ? 'text-yellow-400 border-b':'text-white'}>Createrecipes</NavLink>
        <NavLink to="/contact" className={(e)=> e.isActive ? 'text-yellow-400 border-b':'text-white'}>Contact</NavLink>
        <NavLink to="/service" className={(e)=> e.isActive ? 'text-yellow-400 border-b':'text-white'}>Service</NavLink>
        <NavLink to="/about" className={(e)=> e.isActive ? 'text-yellow-400 border-b':'text-white'}>About</NavLink>
        <NavLink to="/favorite" className={(e)=> e.isActive ? 'text-yellow-400 border-b':'text-white'}>Favorite</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
