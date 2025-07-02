import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { recipescontext } from "../context/RecipesContext";

function Create() {

  const {data, setData} = useContext(recipescontext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const SubmitHandler = (formData) => {
    formData.id = nanoid(6);
    setData([...data, formData]);
    toast.success("Recipe Created Successfully!");
    reset()
  };


  return (
    <div className="px-20 py-10">
      <div>
        <h1 className="text-3xl font-medium">Creation of Recipes</h1>
        <p className="text-zinc-500">
          Try to create new product of our platefrom !
        </p>
      </div>
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="flex flex-col gap-2 w-fit mt-2 flex-wrap py-5"
      >
        <input
          type="text"
          placeholder="Recipe title here"
          {...register("title", { required: "Title can not be empty" })}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.title && (
          <small className="text-red-500">{errors.title.message}</small>
        )}
        <input
          type="text"
          placeholder="Chief Name"
          {...register("chief", { required: "Chief name can not be empty" })}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.chief && (
          <small className="text-red-500">{errors.chief.message}</small>
        )}
        <input
          type="url"
          placeholder="Paste the recipe image link"
          {...register("image", { required: "link can not be empty" })}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {errors.image && (
          <small className="text-red-500">{errors.image.message}</small>
        )}

        <div className="flex w-full gap-5">
          <textarea
            placeholder="Enter description here..."
            {...register("description", {
              required: "description can not be empty",
            })}
            className="w-full h-15 bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          {errors.descrription && (
            <small className="text-red-500">{errors.description.message}</small>
          )}

          <textarea
            placeholder="Enter ingredients here..."
            {...register("ingridients", {
              required: "ingridient can not be empty",
            })}
            className="w-full h-24 bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          {errors.ingridients && (
            <small className="text-red-500">{errors.ingridients.message}</small>
          )}

          <textarea
            placeholder="Enter instructions here..."
            {...register("instruction", {
              required: "instruction can not be empty",
            })}
            className="w-full h-24 bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          {errors.instruction && (
            <small className="text-red-500">{errors.instruction.message}</small>
          )}
        </div>

        <select
          {...register("category", { required: "Select any item" })}
          className="bg-transparent border-b py-2 outline-none"
        >
          <option className="bg-red-500 text-white" value="">
            Select Category
          </option>
          <option className="bg-zinc-700 text-white" value="starter">
            Starter
          </option>
          <option className="bg-zinc-700 text-white" value="main">
            Main Course
          </option>
          <option className="bg-zinc-700 text-white" value="dessert">
            Dessert
          </option>
          <option className="bg-zinc-700 text-white" value="beverage">
            Beverage
          </option>
          <option className="bg-zinc-700 text-white" value="snack">
            Snack
          </option>
          <option className="bg-zinc-700 text-white" value="salad">
            Salad
          </option>
        </select>
        {errors.category && (
          <small className="text-red-500">{errors.category.message}</small>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 transition-all py-3 rounded-lg font-semibold"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default Create;
