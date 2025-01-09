import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UserTable from "./UserTable";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="manage all users"
        subHeading="How Many?"
      ></SectionTitle>
      <h1 className="text-2xl font-bold">Total Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserTable
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
