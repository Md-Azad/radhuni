const UserTable = ({ user, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>Blue</td>
    </tr>
  );
};

export default UserTable;
