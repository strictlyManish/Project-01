import React from "react";
import { Link } from "react-router-dom";
function RecipeCard(props) {
  const { id, title, desc, ingr, cat, url } = props.recipe;
  return (
    <Link
      to={`/recipes/${id}`}
      key={id}
      className="block w-[18vw] bg-gray-700 p-2 rounded-md hover:shadow-lg transition-all duration-300 ease-in-out"
    >
      <div className="flex gap-1 flex-col">
        <img src={url} alt="" className="w-full h-[20vh] object-cover rounded-md overflow-hidden" />
        <h2 className="text-xl uppercase text-orange-400">{title}</h2>
        <p className="text-gray-300">
          Description
          <br />
          {desc && desc.length > 0 ? (
            <>
              {desc.slice(0, 100)}...
              <small className="text-blue-500"> more.</small>
            </>
          ) : (
            <span className="italic text-gray-500">
              No description available
            </span>
          )}
        </p>
        <p className="text-gray-300">
          Ingridients
          <br />
          {ingr && ingr.length > 0 ? (
            <>
              {ingr.slice(0, 100)}...
              <small className="text-blue-500"> more.</small>
            </>
          ) : (
            <span className="italic text-gray-500">
              No description available
            </span>
          )}
        </p>
        
        <p className="text-sm text-gray-400 mt-1">Category: {cat}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
