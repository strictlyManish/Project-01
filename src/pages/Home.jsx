import React from "react";
import Recipes from "./Recipes";
import CreateRecipes from "./CreateRecipes";
import Contact from "./Contact";
import Services from "./Service";
import About from "./About"

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1556911073-a517e752729c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGtpdGNoZW58ZW58MHwwfDB8fHww"
          alt="Banner"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase">Welcome to Restro</h1>
          <p className="text-lg text-gray-300 mt-4">Serving taste & tradition every day</p>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="mt-20">
        <Recipes />
      </section>

      {/* Create Recipes Section */}
      <section id="create-recipes" className="mt-20">
        <CreateRecipes />
      </section>

      {/* Services Section */}
      <section id="services" className="mt-20">
        <Services />
      </section>

      {/* About Section */}
      <section id="about" className="mt-20">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-20">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
