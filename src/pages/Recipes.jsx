import React, { useContext } from "react";
import { recipescontext } from "../context/RecipesContext";

function Recipes() {
  const { data } = useContext(recipescontext);

  const recipe = data.map((val,idx) => {
    return (
      <div
        key={idx}
        onClick={() => {
          getdataVal(val.id);
        }}
        className="recipe-card w-[300px] md:w-[350px] bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col gap-4"
      >
        {/* Image Section */}
        <div className="w-full h-[180px] overflow-hidden rounded-lg relative">
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
          <h2 className="text-2xl font-bold text-orange-400">{val.title}</h2>

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
            <p className="font-semibold text-orange-400">Description:</p>
            <p>{val.description}</p>
          </div>

          
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg">
              view or save
            </button>
        </div>
      </div>
    );
  });

  const getdataVal = (val) => {
    const filteredData = data.filter((data) => data.id !== val);
    console.log(filteredData);
  };
  return (
    <div className="px-20 py-10">
      <h1 className="text-3xl font-medium">Recipes section</h1>
      <p className="text-zinc-500">
        Try to serach new recipes of our platefrom !
      </p>

      <div className="mt-5 flex gap-4 flex-wrap">{recipe}</div>
    </div>
  );
}

export default Recipes;
