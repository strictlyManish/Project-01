import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { MyContext } from "../context/Wrapper";

function Recipes() {
  const [data] = useContext(MyContext);

  const renderData = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div>
      <div>
        <h1 className="text-2xl text-zinc-500 uppercase">
          Our Recipes Collections
        </h1>
      </div>
      <div className="mt-5 flex items-start gap-2 flex-wrap scroll-m-0">
        {data.length > 0 ? renderData:'Not Recipes found.'}
      </div>
    </div>
  );
}

export default Recipes;
