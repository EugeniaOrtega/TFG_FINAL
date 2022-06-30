import React from "react";

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import { useAuth } from "context/authContext";

export default function Profile() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/team-2-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0 lg:hover:text-blueGray-200">
                      <a
                        className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-blueGray-800 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 lg:hover:text-blueGray-200"
                        href="/admin/settings"
                      >
                        <i className="fas fa-edit mr-2 text-lg text-blueGray-800 lg:hover:text-blueGray-200"></i>{" "}
                        Editar perfil
                      </a>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Amigos
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">Fotos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comentarios
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {user.displayName || user.name || "Sin nombre"}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <a
                      className="lg:text-black-200 lg:hover:text-blueGray-200 text-black-300  uppercase font-bold"
                      href="https://www.google.com/maps/dir/40.2620416,-4.2237952/Universidad+CEU+San+Pablo,+C.+de+Juli%C3%A1n+Romea,+23,+28003+Madrid/@40.3352252,-4.2505433,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd422845f7342fab:0x38877dd3b6f3bfd!2m2!1d-3.7177054!2d40.4426616"
                    >
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                      Universidad CEU San Pablo, C. de Julián Romea, 23, 28003
                      Madrid
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
                <div className="mt-10 py-10  border-blueGray-200 text-center"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
