import { Link } from "react-router-dom";
function RecipeCard(props) {
  const { id, title, desc, ingr, cat, url } = props.recipe;

  return (
    <Link
  to={`/recipes/${id}`}
  key={id}
  className="block w-[90%] sm:w-[45%] md:w-[30%] lg:w-[18vw] bg-gray-900 p-4 rounded-xl hover:shadow-xl transition-all duration-300 ease-in-out relative group"
>

  {/* Image */}
  <img
    src={url}
    alt="Recipe"
    className="w-full h-[20vh] object-cover rounded-md mb-3 shadow-sm"
  />

  {/* Title */}
  <h2 className="text-xl font-semibold uppercase text-orange-400 mb-2">
    {title}
  </h2>

  {/* Description */}
  <div className="text-gray-300 text-sm mb-2">
    <p className="font-semibold text-gray-400">Description</p>
    {desc && desc.length > 0 ? (
      <>
        {desc.slice(0, 50)}...
        <small className="text-blue-500 ml-1">more</small>
      </>
    ) : (
      <span className="italic text-gray-500">No description available</span>
    )}
  </div>

  {/* Ingredients */}
  <div className="text-gray-300 text-sm mb-2">
    <p className="font-semibold text-gray-400">Ingredients</p>
    {ingr && ingr.length > 0 ? (
      <>
        {ingr.slice(0, 50)}...
        <small className="text-blue-500 ml-1">more</small>
      </>
    ) : (
      <span className="italic text-gray-500">No ingredients provided</span>
    )}
  </div>

  {/* Category */}
  <p className="text-xs text-gray-500 font-medium mt-1">Category: {cat}</p>
</Link>

  );
}

export default RecipeCard;
