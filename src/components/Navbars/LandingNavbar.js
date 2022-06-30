/*eslint-disable*/
import UserDropdown from "components/Dropdowns/UserDropdown";
import React from "react";

// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <div className="hover:text-white text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold lg:hover:text-blueGray-200">
                  <Link to={"/admin/settings"}>
                    <i className="text-blueGray-200 fas fa-cog text-lg leading-lg mr-2" />{" "}
                    Configuración
                  </Link>
                </div>
              </li>
              <li className="flex items-center">
                <div className="hover:text-white text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold lg:hover:text-blueGray-200">
                  <Link to={"/admin/dashboard"}>
                    <i className="text-blueGray-200 fas fa-chart-line text-lg leading-lg mr-2" />{" "}
                    Dashboard
                  </Link>
                </div>
              </li>
              <li className="flex items-center">
                <div className="hover:text-white text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold lg:hover:text-blueGray-200">
                  <Link to={"/admin/tables"}>
                    <i className="text-blueGray-200 fas fa-table text-lg leading-lg mr-2" />{" "}
                    Tablas
                  </Link>
                </div>
              </li>
              <li className="flex items-center">
                <div className="hover:text-white text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold lg:hover:text-blueGray-200">
                  <Link to={"/admin/maps"}>
                    <i className="text-blueGray-200 far fa-map text-lg leading-lg mr-2" />{" "}
                    Mapas
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
