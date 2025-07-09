import { MyContext } from "../context/Wrapper";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { nanoid } from "nanoid";
import { toast} from "react-toastify";
import {useNavigate} from 'react-router-dom'
function CreateRecipes() {
  const [data,setData] = useContext(MyContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const create = (details) =>{
    details.id = nanoid(6);
    
    const copydata = [...data]
    copydata.push(details)
    setData(copydata)
    localStorage.setItem("data",JSON.stringify(copydata))

    toast.success('Recipes Created')
    reset()
    navigate('/recipes')
  }

  

  return (
    <div className="min-h-screen px-10 py-8 text-white">
  {/* Title */}
  <div className="mb-6">
    <h1 className="text-zinc-400 uppercase text-3xl font-semibold">
      Create Your Own Recipe
    </h1>
  </div>

  {/* Form */}
  <form
    onSubmit={handleSubmit(create)}
    className="flex flex-col gap-5 max-w-4xl"
  >
    {/* Title Input */}
    <div>
      <input
        {...register("title", { required: "can not be empty" })}
        type="text"
        placeholder="Recipe title"
        className="w-full p-3 rounded bg-zinc-700 outline-none shadow-md"
      />
      {errors.title && (
        <small className="text-red-500">{errors.title.message}</small>
      )}
    </div>

    {/* Chief Input */}
    <div>
      <input
        {...register("chief", { required: "can not be empty" })}
        type="text"
        placeholder="Chief name"
        className="w-full p-3 rounded bg-zinc-700 outline-none shadow-md"
      />
      {errors.chief && (
        <small className="text-red-500">{errors.chief.message}</small>
      )}
    </div>

    {/* Image URL Input */}
    <div>
      <input
        {...register("url", { required: "can not be empty" })}
        type="url"
        placeholder="Paste Image URL"
        className="w-full p-3 rounded bg-zinc-700 outline-none shadow-md"
      />
      {errors.url && (
        <small className="text-red-500">{errors.url.message}</small>
      )}
    </div>

    {/* Textareas in Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <textarea
          {...register("desc", { required: "can not be empty" })}
          placeholder="Description"
          rows={4}
          className="w-full p-3 rounded bg-gray-700 resize-none outline-none italic"
        ></textarea>
        {errors.desc && (
          <small className="text-red-500">{errors.desc.message}</small>
        )}
      </div>

      <div>
        <textarea
          {...register("ingr", { required: "can not be empty" })}
          placeholder="Ingredients"
          rows={4}
          className="w-full p-3 rounded bg-gray-700 resize-none outline-none italic"
        ></textarea>
        {errors.ingr && (
          <small className="text-red-500">{errors.ingr.message}</small>
        )}
      </div>

      <div>
        <textarea
          {...register("ins", { required: "can not be empty" })}
          placeholder="Instructions"
          rows={4}
          className="w-full p-3 rounded bg-gray-700 resize-none outline-none italic"
        ></textarea>
        {errors.ins && (
          <small className="text-red-500">{errors.ins.message}</small>
        )}
      </div>
    </div>

    {/* Category Selector */}
    <div>
      <select
        {...register("cat", { required: "please select one" })}
        className="w-[50%] px-3 py-3 rounded bg-gray-700 outline-none"
      >
        <option disabled selected value="">
          Select a category
        </option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="super">Super</option>
        <option value="breakfast">Breakfast</option>
      </select>
      {errors.cat && (
        <small className="text-red-500">{errors.cat.message}</small>
      )}
    </div>

    {/* Submit Button */}
    <button className="w-fit bg-orange-500 hover:bg-orange-600 px-10 py-2 rounded text-white font-semibold">
      Create Recipe
    </button>
  </form>
</div>

  );
}

export default CreateRecipes;
