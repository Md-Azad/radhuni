import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const [isAdmin, isPending] = useAdmin();
  const { user, loading } = useAuth();

  if (loading || isPending) {
    return (
      <>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </>
    );
  }

  if (user?.email && isAdmin) {
    console.log("i have admin and user.");
    return children;
  }

  return <Navigate to="/" />;
};

export default AdminRoute;
