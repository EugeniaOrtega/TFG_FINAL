import React from "react";
import PropTypes from "prop-types";
import {
  PencilAltIcon,
  SaveIcon,
  TrashIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import { uid } from "uid";
import { onValue, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase.config";
// components

export default function CardTable({ color }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [tipo, settipo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleChangeApellido = (e) => {
    setApellido(e.target.value);
  };
  const handleChangeCargo = (e) => {
    setCargo(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangetipo = (e) => {
    settipo(e.target.value);
  };
  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);
  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      nombre,
      apellido,
      cargo,
      email,
      dni,
      tipo,
      uuid,
    });

    setNombre("");
    setApellido("");
    setCargo("");
    setEmail("");
    setDni("");
    settipo("");
  };
  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempUuid(todo.uuid);
    setNombre(todo.nombre);
    setApellido(todo.apellido);
    setCargo(todo.cargo);
    setEmail(todo.email);
    setDni(todo.dni);
    settipo(todo.tipo);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      nombre,
      apellido,
      cargo,
      email,
      dni,
      tipo,
      uuid: tempUuid,
    });

    setNombre("");
    setApellido("");
    setCargo("");
    setEmail("");
    setDni("");
    settipo("");
    setIsEdit(false);
  };

  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };
  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              Card Tables
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}

        <>
          {todos.length === 0 ? (
            <>No existen empleados</>
          ) : (
            <>
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Nombre
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Apellido
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Cargo
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Email
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Tipo
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Acciones
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    ></th>
                  </tr>
                </thead>
                {todos.map((employe, index) => (
                  <tbody key={index}>
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                          src={
                            "https://us.123rf.com/450wm/salamatik/salamatik1801/salamatik180100019/92979836-perfil-an%C3%B3nimo-icono-de-la-cara-persona-silueta-gris-avatar-masculino-por-defecto-foto-de-marcador-d.jpg?ver=6"
                          }
                          className="h-12 w-12 bg-white rounded-full border"
                          alt="..."
                        ></img>{" "}
                        <input
                          className={
                            "ml-3 font-bold w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                            +(color === "light"
                              ? "text-blueGray-600"
                              : "text-white")
                          }
                          placeholder={employe.nombre}
                          value={nombre}
                          onChange={handleChangeNombre}
                        ></input>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <input
                          className={
                            "ml-3 font-bold w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                            +(color === "light"
                              ? "text-blueGray-600"
                              : "text-white")
                          }
                          placeholder={employe.apellido}
                          value={apellido}
                          onChange={handleChangeApellido}
                        ></input>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <input
                          className={
                            "ml-3 font-bold w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                            +(color === "light"
                              ? "text-blueGray-600"
                              : "text-white")
                          }
                          placeholder={employe.cargo}
                          value={cargo}
                          onChange={handleChangeCargo}
                        ></input>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <input
                          className={
                            "ml-3 font-bold w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                            +(color === "light"
                              ? "text-blueGray-600"
                              : "text-white")
                          }
                          placeholder={employe.email}
                          value={email}
                          onChange={handleChangeEmail}
                        ></input>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <input
                          className={
                            "ml-3 font-bold w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" +
                            +(color === "light"
                              ? "text-blueGray-600"
                              : "text-white")
                          }
                          placeholder={employe.tipo}
                          value={tipo}
                          onChange={handleChangetipo}
                        ></input>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <div className=" flex justify-center ">
                          <button
                            className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex employes-center justify-center mr-4"
                            onClick={() => handleUpdate(employe)}
                          >
                            <PencilAltIcon className="w-5" />
                          </button>
                          {isEdit ? (
                            <>
                              <button
                                className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex employes-center justify-center mr-4"
                                onClick={writeToDatabase}
                              >
                                <SaveIcon className="w-5" />
                              </button>
                              <button
                                className="mr-4"
                                onClick={() => {
                                  setIsEdit(false);

                                  setNombre("");
                                  setApellido("");
                                  setCargo("");
                                  setEmail("");
                                  setDni("");
                                  settipo("");
                                }}
                              >
                                X
                              </button>
                            </>
                          ) : (
                            <button
                              className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex employes-center justify-center mr-4"
                              onClick={writeToDatabase}
                            >
                              <UserAddIcon className="w-5" />
                            </button>
                          )}
                          <button
                            className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex employes-center justify-center mx-auto"
                            onClick={() => handleDelete(employe)}
                          >
                            <TrashIcon className="w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </>
          )}
        </>
      </div>
    </div>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
