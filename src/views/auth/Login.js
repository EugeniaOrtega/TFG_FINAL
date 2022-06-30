import { Alert } from "components/Utils/Alert";
import { useAuth } from "context/authContext";
import React, { useState } from "react";
import { useHistory } from "react-router";

import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const history = useHistory();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      history.push("/admin/dashboard");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle();
      history.push("/admin/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                {error && <Alert message={error} />}{" "}
                <form onSubmit={handleSubmit}>
                  {" "}
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-blueGray-500 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>

                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="submit"
                        onClick={handleLoginGoogle}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={require("assets/img/google.svg").default}
                        />
                        Google
                      </button>
                    </div>
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Introduce tu email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="******"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <a className="text-gray-500" href="/resetPassword">
                        ¿Has olvidado la contraseña?
                      </a>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>{" "}
                <div className="flex flex-wrap mt-6 relative">
                  <div className="w-1/2">
                    <Link to="/auth/resetPassword" className="">
                      <small>Forgot password?</small>
                    </Link>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link to="/auth/register" className="">
                      <small>Create new account</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
