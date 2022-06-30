import { useAuth } from "context/authContext";
import React from "react";

// components

export default function CardProfile() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/team-2-800x800.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-2">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center ">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {user.displayName || user.name || "Sin nombre"}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <a
                className="lg:text-black-200 lg:hover:text-blueGray-200 text-black-300  uppercase font-bold"
                href="https://www.google.com/maps/dir/40.2620416,-4.2237952/Universidad+CEU+San+Pablo,+C.+de+Juli%C3%A1n+Romea,+23,+28003+Madrid/@40.3352252,-4.2505433,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd422845f7342fab:0x38877dd3b6f3bfd!2m2!1d-3.7177054!2d40.4426616"
              >
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                Universidad CEU San Pablo, C. de Julián Romea, 23, 28003 Madrid
              </a>
            </div>
            <div className="text-sm leading-normal text-blueGray-400 font-bold uppercase">
              <i className="fas fa-envelope mr-2 mb-2 text-lg text-blueGray-400"></i>{" "}
              {user.email}
            </div>
            <div className="mb-2 text-blueGray-600 ">
              <i className="fas fa-laptop-code mr-2 text-lg text-blueGray-400"></i>
              Developer Fullstack
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              Universidad CEU San Pablo - Madrid
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
