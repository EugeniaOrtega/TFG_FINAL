import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <Fade>
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">
                  Siguenos en nuestras redes sociales!
                </h4>

                <div className="mt-6 lg:mb-0 mb-6">
                  <a
                    href="/https://www.linkedin.com/company/export-trading-group"
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    {" "}
                    <button
                      className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <i className="fab fa-linkedin"></i>
                    </button>
                  </a>
                  <a
                    href="https://www.facebook.com/exporttrading"
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    <button
                      className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </button>
                  </a>
                </div>
              </div>
            </Fade>
            <Fade top>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                      Enlaces de pagina
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          <Link to="/admin/dashboard">Dashboard</Link>
                        </a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          <Link to="/profile">Profile</Link>
                        </a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          <Link to="/admin/settings">Settings</Link>
                        </a>
                      </li>
                      <li>
                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          <Link to="/admin/tables">Tablas</Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <hr className="my-6 border-blueGray-300" />
          </Fade>

          <Fade left>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © {new Date().getFullYear()} Creado por{" "}
                  <div className="text-blueGray-500 hover:text-blueGray-800">
                    Eugenia Ortega
                  </div>
                  .
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </footer>
    </>
  );
}
