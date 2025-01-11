import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import { useEffect, useState } from "react";

const UpdateItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const [item, setItem] = useState([]);
  const id = useParams();

  useEffect(() => {
    axiosPublic
      .get(`/menu/${id.id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const onSubmit = async (data) => {
    const res = axiosPublic.get(`/menu/${id}`);
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="update an Item"
        subHeading="Any Changes"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            {...register("name")}
            defaultValue={item.name}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </label>
        <div className="flex gap-6">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              {...register("category")}
              defaultValue={item.category}
              className="select select-bordered"
            >
              <option disabled value="">
                Select Category
              </option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price")}
              type="number"
              defaultValue={item.price}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Your bio</span>
          </div>
          <textarea
            {...register("recipe")}
            defaultValue={item.recipe}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe"
          ></textarea>
        </label>
        <div className="mt-4">
          <input
            type="file"
            {...register("image")}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>

        <div className="mt-4">
          <button className="btn w-full bg-purple-600 text-white">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
