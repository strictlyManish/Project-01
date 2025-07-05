import banner from "../assets/banner.jpg";
import React, { useContext } from "react";
import { recipescontext } from "../context/RecipesContext";
import FruitPromoSection from './FruitPromoSection'

function Home() {
  const { data } = useContext(recipescontext);
  const renderpr = data.map((val, idx) => {
    return (
      <div
        key={idx}
        onClick={() => {
          getdataVal(val.id);
        }}
        className="recipe-card w-[300px] md:w-[350px] bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col gap-4"
      >
        {/* Image Section */}
        <div className="w-full h-[180px] overflow-hidden rounded-lg relative text-left">
          <img
            src={val.image}
            alt={val.title}
            onError={(e) => {
              e.target.src =
                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58f4019e-ae34-409a-b44a-9065aa1d9a8b.png";
              e.target.alt = "Placeholder recipe image";
            }}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-3 text-white">
          <h2 className="text-2xl font-bold text-orange-400 text-left">{val.title}</h2>

          <div className="flex items-center gap-2 text-sm">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-300 font-semibold">Chef:</span>
            <span className="text-white">{val.chief}</span>
          </div>

          <div className="text-gray-300 text-sm">
            <p className="font-semibold text-orange-400 text-left">Description:</p>
            <p className="text-left">{val.description}</p>
          </div>

          
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg">
              View more.
            </button>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full overflow-hidden rounded-sm">
      {/* Banner Section */}
      <div
        className="bg-cover bg-center relative h-[90vh]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="h-full w-full bg-black bg-opacity-60 text-white px-10 py-8 flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-light">Premium Restaurant</h1>
            <button className="bg-orange-500 px-5 py-2 rounded hover:bg-orange-600 transition">
              Sign In
            </button>
          </div>

          {/* Main Content */}
          <div className="mt-10">
            <h2 className="text-6xl font-semibold leading-tight">
              Anida <br /> Dedelay
            </h2>
            <p className="text-md font-mono uppercase mt-4">
              Fine dining like never before.
            </p>
            <button className="bg-orange-500 px-6 py-3 rounded mt-6 hover:bg-orange-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full mt-10 bg-gray-900 text-white py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
          {/* Text + Image Section */}
          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="text-3xl font-bold">Orange Benefits</h2>
            <div className="flex items-start gap-6">
              <img
                src="https://images.unsplash.com/photo-1747933039808-1d1d847107cb?w=600&auto=format&fit=crop&q=60"
                width={150}
                alt="Orange benefits"
                className="rounded-md object-cover"
              />
              <p className="text-sm font-mono uppercase">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                incidunt aperiam, itaque perspiciatis ut repellendus laborum
                nisi deserunt explicabo nulla accusantium architecto, cupiditate
                nostrum sunt consectetur harum eveniet aut officia.
              </p>
            </div>
          </div>

          {/* Side Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1747933039808-1d1d847107cb?w=600&auto=format&fit=crop&q=60"
              width={250}
              alt="Orange Display"
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
      {/* Products/Menu Section */}
      <div className="bg-gray-700 mt-5 py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Our Signature Dishes
          </h2>
          <div className=" flex  items-start gap-10 flex-wrap">{renderpr}</div>
        </div>
      </div>
      <div className="flex bg-gray-700">
        <FruitPromoSection/>
      </div>
    </div>
  );
}

export default Home;
