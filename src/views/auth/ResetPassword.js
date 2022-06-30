import React, { useState } from "react";
import { Alert } from "components/Utils/Alert";
import { useAuth } from "context/authContext";
import { useHistory } from "react-router";
export default function ResetPassword() {
  const [user, setUser] = useState({
    email: "",
  });
  const [error, setError] = useState();
  const { resetPassword } = useAuth();
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    //console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(user.email);
      setError("Check your email to reset your password");
      history.push("/auth/login");
    } catch (error) {
      //console.log(error);
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
                <form onSubmit={handleResetPassword}>
                  {" "}
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
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Restablecer contraseña
                    </button>
                  </div>
                </form>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
