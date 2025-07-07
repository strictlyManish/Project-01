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
    setData((prev) => [...prev, details]);
    toast.success('Recipes Created')
    reset()
    navigate('/recipes')
  }

  

  return (
    <div>
      <div>
        <h1 className="text-zinc-500 uppercase text-2xl">
          Create Your own recipe
        </h1>
      </div>
      <form onSubmit={handleSubmit(create)} className="mt-6 flex flex-col w-fit gap-2">
        <input {...register('title',{required:'can not be empty'})} type="text" placeholder="Recipe title" className="p-3 w-[60%] rounded bg-zinc-700 outline-none shadow-md" />
        {errors.title && <small className="text-red-500 capitalize">{errors.title.message}</small>}
        <input {...register('chief' ,{required:'can not be empty'})} type="text" placeholder="Chief name" className="p-3 w-[60%] rounded bg-zinc-700 outline-none shadow-md" />
        {errors.chief && <small className="text-red-500 capitalize">{errors.chief.message}</small>}

        <input {...register('url',{required:'can not be empty'})} type="url" placeholder="Paste URL " className="p-3 w-[60%] rounded bg-zinc-700 outline-none shadow-md" />
        {errors.url && <small className="text-red-500 capitalize">{errors.url.message}</small>}

        <div className="flex gap-2">
         <div>
           <textarea
             {...register('desc',{required:'can not be empty'})}
            placeholder="Discription"
            className="italic resize-none outline-none px-3 py-4 rounded bg-gray-600"
            rows={4} cols={35}
          ></textarea>
          <br />
        {errors.desc && <small className="text-red-500 capitalize">{errors.desc.message}</small>}
         </div>
         <div>
           <textarea
             {...register('ingr',{required:'can not be empty'})}
            placeholder="Ingridients"
            className="italic resize-none outline-none px-3 py-4 rounded bg-gray-600"
            rows={4} cols={35}
          ></textarea>
          <br />
        {errors.ingr && <small className="text-red-500 capitalize">{errors.ingr.message}</small>}
         </div>
         <div>
           <textarea
             {...register('ins',{required:'can not be empty'})}
            placeholder="Instruction"
            className="italic resize-none outline-none px-3 py-4 rounded bg-gray-600"
            rows={4} cols={35}
          ></textarea>
          <br />
        {errors.ins && <small className="text-red-500 capitalize">{errors.ins.message}</small>}
         </div>
        </div>
        <select {...register('cat',{required:'please selcet one'})} className="w-[20%]  px-3 py-3 rounded bg-gray-600 outline-none">
          <option disabled={true}>Select any one</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="super">Super</option>
          <option value="breakfast">BreakFast</option>
          </select>
          {errors.cat && <small className="text-red-500 capitalize">{errors.cat.message}</small>}
        <button className="items-start w-fit bg-orange-500 px-10 py-2 rounded">Create Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipes;
