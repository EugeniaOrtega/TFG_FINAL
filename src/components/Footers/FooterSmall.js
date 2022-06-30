import React from "react";
import { Fade } from "react-reveal";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <Fade right>
              <div className="w-full md:w-4/12 px-4">
                <div className="text-sm text-white font-semibold py-1 text-center md:text-left">
                  Copyright © {new Date().getFullYear()}
                  <div className="text-white  text-sm font-semibold py-1">
                    Creado por {""}Eugenia Ortega
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="w-full lg:w-6/12 px-4 flex justify-end">
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
          </div>
        </div>
      </footer>
    </>
  );
}
