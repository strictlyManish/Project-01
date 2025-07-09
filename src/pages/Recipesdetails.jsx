import { useContext } from "react";
import { MyContext } from "../context/Wrapper";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Recipesdetails() {
  const [data, setData] = useContext(MyContext);
  let params = useParams();
  const filtedData = data.find((data) => params.id == data.id);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id:params.id,
      title: filtedData.title,
      url:filtedData.url,
      desc:filtedData.desc,
      ingr:filtedData.ingr,
      ins:filtedData.ins,
      cat:filtedData.cat,
      chief:filtedData.chief
    },
  });

  const create = (details) => {
    const index = data.findIndex((details) => params.id == details.id);
    const copydata = [...data];
    copydata[index] = { ...copydata, ...details };
    setData(copydata);
    localStorage.setItem("data",JSON.stringify(copydata))
    toast.success("Date updated !");
    navigate("/recipes");
  };

  const delhandler = () => {
    const filteredData = data.filter((r) => r.id !== params.id);
    setData(filteredData);
    localStorage.setItem("data",JSON.stringify(filteredData))

    toast.error("Date Deleted !");
    navigate("/recipes");
  };


  const addtofav = (dets) =>{
    const filteredData = data.filter((r) => r.id !== dets);
    setData(filteredData);
    localStorage.setItem("fav",JSON.stringify(filteredData))

    toast.success("Added to favorite !");
    navigate("/favorite");
  }

  return filtedData ? (
  <div className="w-screen min-h-screen px-10 py-8 flex gap-10 justify-center items-star text-white">
    {/* Left Panel - Image and Title */}
    <div className="w-[30%] flex flex-col gap-4">
      <h2 className="text-3xl font-semibold text-orange-500 uppercase">
        {filtedData.title}
      </h2>
      <img
        src={filtedData.url}
        alt="Recipe"
        className="w-full rounded-lg shadow-md"
      />
      <button onClick={()=>{addtofav(data.id)}} className="self-start bg-red-500 px-5 rounded-3xl py-2 active:bg-green-600">Like 👍</button>
    </div>

    {/* Right Panel - Form */}
    <div className="w-[60%]">
      <form onSubmit={handleSubmit(create)} className="flex flex-col gap-5">
        {/* Title */}
        <div>
          <input
            {...register("title", { required: "can not be empty" })}
            type="text"
            placeholder="Recipe title"
            className="w-full p-3 rounded bg-zinc-700 outline-none"
          />
          {errors.title && (
            <small className="text-red-500">{errors.title.message}</small>
          )}
        </div>

        {/* Chief Name */}
        <div>
          <input
            {...register("chief", { required: "can not be empty" })}
            type="text"
            placeholder="Chief name"
            className="w-full p-3 rounded bg-zinc-700 outline-none"
          />
          {errors.chief && (
            <small className="text-red-500">{errors.chief.message}</small>
          )}
        </div>

        {/* URL */}
        <div>
          <input
            {...register("url", { required: "can not be empty" })}
            type="url"
            placeholder="Paste Image URL"
            className="w-full p-3 rounded bg-zinc-700 outline-none"
          />
          {errors.url && (
            <small className="text-red-500">{errors.url.message}</small>
          )}
        </div>

        {/* Textareas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <textarea
              {...register("desc", { required: "can not be empty" })}
              placeholder="Description"
              rows={4}
              className="w-full p-3 rounded bg-gray-700 resize-none outline-none"
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
              className="w-full p-3 rounded bg-gray-700 resize-none outline-none"
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
              className="w-full p-3 rounded bg-gray-700 resize-none outline-none"
            ></textarea>
            {errors.ins && (
              <small className="text-red-500">{errors.ins.message}</small>
            )}
          </div>
        </div>

        {/* Category */}
        <div>
          <select
            {...register("cat", { required: "please select one" })}
            className="w-[50%] p-3 rounded bg-gray-700 outline-none"
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

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="bg-orange-500 px-6 py-2 rounded text-white font-semibold">
            Update Recipe
          </button>
          <button
            onClick={delhandler}
            type="button"
            className="bg-red-600 px-6 py-2 rounded text-white font-semibold"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  </div>
) : (
  "Loading..."
);

}

export default Recipesdetails;
