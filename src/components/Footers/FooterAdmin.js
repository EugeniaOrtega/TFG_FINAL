import React from "react";
import { Fade } from "react-reveal";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <Fade right>
              <div className="w-full md:w-4/12 px-4">
                <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                  Copyright © {new Date().getFullYear()}{" "}
                  <div className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1">
                    Tomas Salcedo
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              {" "}
              <div className="w-full md:w-8/12 px-4 ">
                <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                  <li>
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
                  </li>
                  <li>
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
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </footer>
    </>
  );
}
