import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import CreateRcipes from '../pages/CreateRecipes'
import Recipesdetails from '../pages/Recipesdetails'
function MainRoute() {
  return (
    <div className="mt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipesdetails />} />
        <Route path="/createrecipes" element={<CreateRcipes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
