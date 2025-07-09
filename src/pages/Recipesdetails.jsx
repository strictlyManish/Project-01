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

  return filtedData ? (
    <div className="w-screen flex gap-2 justify-center items-center scroll-m-0">
      <div className="w-[25%] flex flex-col gap-6">
        <h2 className="text-2xl uppercase font-medium text-orange-500">
          {filtedData.title}
        </h2>
        <img src={filtedData.url} alt="" className="w-[100%] rounded-md" />
      </div>
      <div className="w-[60%] scroll-m-0">
        <form onSubmit={handleSubmit(create)} className="flex flex-col gap-2">
          <input
            
            {...register("title", { required: "can not be empty" })}
            type="text"
            placeholder="Recipe title"
            className="p-3 w-[60%] rounded bg-zinc-700 outline-none shadow-md"
          />
          {errors.title && (
            <small className="text-red-500 capitalize">
              {errors.title.message}
            </small>
          )}
          <input
            
            {...register("chief", { required: "can not be empty" })}
            type="text"
            placeholder="Chief name"
            className="p-3 w-[60%] rounded bg-zinc-700 outline-none shadow-md"
          />
          {errors.chief && (
            <small className="text-red-500 capitalize">
              {errors.chief.message}
            </small>
          )}

          <input
           
            {...register("url", { required: "can not be empty" })}
            type="url"
            placeholder="Paste URL "
            className="p-3 w-[60%] rounded bg-zinc-700 outline-none shadow-md"
          />
          {errors.url && (
            <small className="text-red-500 capitalize">
              {errors.url.message}
            </small>
          )}

          <div className="flex w-[60%] gap-2">
            <div>
              <textarea
                {...register("desc", { required: "can not be empty" })}
                placeholder="Discription"
                className="italic resize-none outline-none px-3 py-4 rounded bg-gray-600"
                rows={4}
                cols={30}
                
              ></textarea>
              <br />
              {errors.desc && (
                <small className="text-red-500 capitalize">
                  {errors.desc.message}
                </small>
              )}
            </div>
            <div>
              <textarea
                {...register("ingr", { required: "can not be empty" })}
                placeholder="Ingridients"
                className="italic resize-none outline-none px-3 py-4 rounded bg-gray-600"
                rows={4}
                cols={30}
                
              ></textarea>
              <br />
              {errors.ingr && (
                <small className="text-red-500 capitalize">
                  {errors.ingr.message}
                </small>
              )}
            </div>
            <div>
              <textarea
                {...register("ins", { required: "can not be empty" })}
                placeholder="Instruction"
                className="italic resize-none outline-none px-3 py-4 rounded bg-gray-600"
                rows={4}
                cols={30}
                
              ></textarea>
              <br />
              {errors.ins && (
                <small className="text-red-500 capitalize">
                  {errors.ins.message}
                </small>
              )}
            </div>
          </div>
          <select
            
            {...register("cat", { required: "please selcet one" })}
            className="w-[20%]  px-3 py-3 rounded bg-gray-600 outline-none"
          >
            <option disabled={true}>Select any one</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="super">Super</option>
            <option value="breakfast">BreakFast</option>
          </select>
          {errors.cat && (
            <small className="text-red-500 capitalize">
              {errors.cat.message}
            </small>
          )}
          <div className="flex gap-5">
            <button className="items-start w-fit bg-orange-500 px-10 py-2 rounded">
              Update Recipe
            </button>
            <button
              onClick={delhandler}
              className="items-start w-fit bg-red-600 px-10 py-2 rounded"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    "Loding.."
  );
}

export default Recipesdetails;
