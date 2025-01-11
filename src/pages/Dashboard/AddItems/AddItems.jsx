import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const apiKey = import.meta.env.VITE_Imagebb_api;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const image = { image: data.image[0] };
    const res = await axiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      image,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        price: data.price,
        image: res.data.data.display_url,
        category: data.category.toLowerCase(),
        recipe: data.recipe,
      };
      axiosSecure
        .post("/menu", menuItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Item has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subHeading="Any Changes"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            {...register("name")}
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
              defaultValue="default"
              className="select select-bordered"
            >
              <option disabled value="default">
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
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
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

export default AddItems;
