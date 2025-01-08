import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        if (res.user?.email) {
          navigate(from, { replace: true });
        }

        const userInfo = {
          name: res?.user?.displayName,
          email: res?.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline btn-primary"
      >
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
