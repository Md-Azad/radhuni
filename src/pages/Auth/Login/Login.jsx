import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        if (result.user?.email) {
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        alert("an error occured", err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col w-3/5  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="text-center">
            <div className="divider divider-success">With</div>

            <SocialLogin></SocialLogin>
          </div>
          <div className="divider divider-success">OR</div>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                className={`btn btn-primary `}
                type="submit"
                value="Login"
              />
            </div>
          </form>

          <p
            className="text-center mb-4
          "
          >
            <small>
              New Here?{" "}
              <Link to="/signup" className="text-yellow-500">
                Sign Up Here
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
