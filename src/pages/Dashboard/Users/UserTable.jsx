import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserTable = ({ user, index }) => {
  const axiosSecure = useAxiosSecure();
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `${user?.name} has been deleted.`,
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td className="text-center">
        {user?.role ? (
          role
        ) : (
          <>
            <button
              //   onClick={() => handleMakeAdmin(user._id)}
              className="btn bg-orange-600"
            >
              <FaUsers className="text-white text-2xl"></FaUsers>
            </button>
          </>
        )}
      </td>
      <td>
        <button onClick={() => handleDeleteUser(user._id)} className="btn">
          <FaTrashAlt className="text-2xl text-red-700"></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
