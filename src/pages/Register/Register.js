import React, { useContext } from "react";
import register from "./regsiter.png";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const imgHostKey = process.env.REACT_APP_imgHostKey;
  const {
    setLoading,
    createUserAccount,
    updateUserProfile,
    loginWithProvider,
  } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const formData = new FormData();
    formData.append("image", photo);
    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imgData) => {
        if (imgData.success) {
          const photoURL = imgData.data.url;
          createUserAccount(email, password)
            .then((result) => {
              updateUserProfile(name, photoURL)
                .then(() => {
                  navigate(from, { replace: true });
                })
                .catch((error) => toast.error(error.message.slice(22, -2)));
            })
            .catch((error) => toast.error(error.message.slice(22, -2)));
        }
      });
  };

  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    loginWithProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error))
      .finally(setLoading(false));
  };

  const handleGithubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    loginWithProvider(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error))
      .finally(setLoading(false));
  };

  return (
    <div>
      <h2 className="text-2xl font-medium text-center mt-10">
        Create a New Account
      </h2>
      <div className="grid md:grid-cols-2 items-center">
        <img src={register} alt="" className="lg:w-4/5 mx-auto" />
        <div>
          <form
            onSubmit={handleRegister}
            className="mx-auto w-4/5 md:w-auto md:mt-2 lg:mt-0"
          >
            <label htmlFor="name" className="block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-200 px-2 py-1.5 my-1.5 rounded w-full md:w-4/5 lg:w-2/5"
            />
            <label htmlFor="photo" className="block">
              Profile Photo
            </label>
            <input
              type="file"
              name="photo"
              className="bg-gray-200 my-1.5 rounded w-full md:w-4/5 lg:w-2/5"
            />
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-200 px-2 py-1.5 my-1.5 rounded w-full md:w-4/5 lg:w-2/5"
            />
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="bg-gray-200 px-2 py-1.5 rounded my-1.5 w-full md:w-4/5 lg:w-2/5"
            />
            <button
              type="submit"
              className="px-5 py-1.5 rounded bg-slate-700 hover:bg-slate-900 text-white font-medium block mt-3"
            >
              Register!
            </button>
          </form>
          <p className="mt-2 w-4/5 mx-auto md:w-auto">
            Already have an account?{" "}
            <Link to="/login" className="text-slate-700">
              Login Now!
            </Link>
          </p>
          <p className="text-center w-full md:w-4/5 lg:w-2/5 my-3">
            Or, Continue with
          </p>
          <div className="w-full md:w-4/5 lg:w-2/5 flex justify-evenly">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center px-4 py-1.5 rounded text-slate-700 border-2 border-slate-700 hover:bg-slate-800 hover:text-white hover:font-medium"
            >
              <FaGoogle className="mr-2" /> Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="flex items-center px-4 py-1.5 rounded text-slate-700 border-2 border-slate-700 hover:bg-slate-800 hover:text-white hover:font-medium"
            >
              <FaGithub className="mr-2" /> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
