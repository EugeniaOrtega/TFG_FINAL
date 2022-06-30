import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Navbar2 from "components/Navbars/LandingNavbar";
import Footer from "components/Footers/Footer.js";
import { useAuth } from "context/authContext";
import { Fade } from "react-reveal";
import { onValue, ref } from "firebase/database";

import { db } from "config/firebase.config";

export default function Landing() {
  const { user } = useAuth();
  console.log(user);
  const [todos, setTodos] = useState([]);
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
  const REACT_APP_EMAILJS_SERVICE_ID = "service_8szdt6h";
  const REACT_APP_EMAILJS_TEMPLATE_ID = "template_ohi70d3";
  const REACT_APP_EMAILJS_USER_ID = "RDmcnsefOrJLCvOsG";

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    alert("El correo se ha enviado correctamente");
  }

  return (
    <>
      {user ? <Navbar2 /> : <Navbar transparent />}

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://www.man-es.com/images/default-source/marine-images/istock-868192214_interp_container-stage-neu.jpg?sfvrsn=e1911eba_0')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <Fade top>
                    <h1 className="text-white font-semibold text-5xl">
                      Sostenibilidad y responsabilidad social corporativa
                    </h1>
                  </Fade>
                  <Fade left>
                    <p className="mt-4 text-lg text-blueGray-200">
                      Inmediatas y futuras de nuestras comunidades. Cada región
                      en cada país tiene sus propios obstáculos únicos. Nuestro
                      equipo de CSR analiza estos requisitos y, con la ayuda de
                      los directores de país y su personal de apoyo, se
                      implementa una solución de CSR a medida. Sin embargo, la
                      distribución de alimentos se mantiene al frente de
                      nuestros objetivos.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <Fade top>
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        <i className="fas fa-user"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Empleados</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        Los empleados de ETG, su gerencia y partes afiliadas se
                        dedican a trabajar para un ambiente saludableLos
                        empleados de ETG, su gerencia y partes afiliadas se
                        dedican a trabajar para un ambiente saludable.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                        <i className="far fa-money-bill-alt"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Salarios</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        Nuestros programas de Responsabilidad Social Corporativa
                        han sido diseñados para abordar las necesidades.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                        <i className="fas fa-file-contract"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Contratos</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        Contrato de viaje firmado con precio cerrado sin
                        sorpresas.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="flex flex-wrap">
              <Fade left>
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                        <i className="fas fa-users"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Equipos</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        Posibilidad de uniros a otro grupo de universitarios que
                        viaje a vuestro mismo destino para conseguir mayores
                        ventajas (open groups).
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </Fade>
              <Fade top>
                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                        <i className="fas fa-retweet"></i>
                      </div>
                      <h6 className="text-xl font-semibold"></h6>
                      <p className="mt-2 mb-4 text-blueGray-500"></p>
                    </div>
                  </div>
                </div>{" "}
              </Fade>
              <Fade right>
                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                        <i className="fas fa-fingerprint"></i>
                      </div>
                      <h6 className="text-xl font-semibold"></h6>
                      <p className="mt-2 mb-4 text-blueGray-500"></p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <Fade right>
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-tools text-xl"></i>
                  </div>
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Trabajar con nosotros nunca fue tan facil
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Mantenemos la integridad como la piedra angular de nuestro
                    sistema de valores. Representa las virtudes de trabajar con
                    honor y honestidad en todo lo que hacemos, tratando con
                    equidad en todas nuestras relaciones con nuestros clientes,
                    compañeros de trabajo y partes interesadas.
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                    Nuestro espíritu de igualdad, meritocracia, aprendizaje
                    constante y enfoque en el equilibrio entre el trabajo y la
                    vida personal garantiza que nuestra gente desarrolle todo su
                    potencial.
                  </p>
                </div>
              </Fade>
              <Fade left>
                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                    <Fade top>
                      <img
                        alt="..."
                        src="https://www.young-diplomats.com/wp-content/uploads/2015/08/Work-with-us.jpg"
                        className="w-full align-middle rounded-t-lg"
                      />
                    </Fade>
                    <Fade bottom>
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-lightBlue-500 fill-current"
                          ></polygon>
                        </svg>
                        <Fade righ>
                          <h4 className="text-xl font-bold text-white">
                            Trabaja con nosotros!
                          </h4>
                        </Fade>
                        <Fade bottom>
                          <p className="text-md font-light mt-2 text-white">
                            Nuestras capacidades de cadena de suministro
                            bidireccional, junto con las capacidades de
                            almacenamiento, logística y distribución en el
                            terreno, hacen de ETG un conglomerado global.
                          </p>
                        </Fade>
                      </blockquote>
                    </Fade>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <Fade left>
            <div className="container mx-auto px-4">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="ship"
                    src="logo512.png"
                    className="w-60 h-auto mt-10 ml-20 "
                  />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                      <i className="fas fa-ship text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">¿Que es ETG?</h3>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                      ETG se ha convertido en un jugador global con una cartera
                      diversa de experiencia en múltiples industrias, que abarca
                      insumos agrícolas, logística, comercialización y
                      procesamiento, optimización de la cadena de suministro y
                      energía.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                      Nuestra pasión radica en la mejora de las comunidades
                      agrícolas; un compromiso sin trabas desde su creación.
                      Nuestros promotores identificaron tres desafíos que
                      enfrentaban las cadenas de suministro en África y crearon
                      un modelo comercial globalizado en torno a soluciones que
                      abordan estos obstáculos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Nuestra gente</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Aspiramos a construir una cultura de trabajo que ponga a
                  nuestra gente primero. Al nutrirlos a lo largo de su
                  trayectoria profesional, ETG se compromete a ayudar a nuestros
                  equipos a alcanzar sus objetivos profesionales. Nuestro
                  espíritu de igualdad, meritocracia, aprendizaje constante y
                  enfoque en el equilibrio entre el trabajo y la vida personal
                  garantiza que nuestra gente desarrolle todo su potencial.
                </p>
              </div>
            </div>
            <Fade bottom>
              <div className="flex flex-wrap">
                {todos.map((employe) => (
                  <>
                    <Fade top>
                      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mt-4">
                        <Fade right>
                          <div className="px-6">
                            <img
                              alt="..."
                              src="https://us.123rf.com/450wm/salamatik/salamatik1801/salamatik180100019/92979836-perfil-an%C3%B3nimo-icono-de-la-cara-persona-silueta-gris-avatar-masculino-por-defecto-foto-de-marcador-d.jpg?ver=6"
                              className="shadow-lg rounded-full mx-auto max-w-120-px"
                            />
                            <div className="pt-6 text-center">
                              <h5 className="text-xl font-bold">
                                {employe.nombre} {employe.apellido}
                              </h5>
                              <div className="text-sm leading-normal text-blueGray-400 font-bold ">
                                <i className="fas fa-envelope mr-2 mb-2 text-lg text-blueGray-400"></i>{" "}
                                {employe.email}
                              </div>
                              <div className="text-sm leading-normal text-blueGray-400 font-bold ">
                                <i className="fas fa-user-graduate mr-2 mb-2 text-lg text-blueGray-400"></i>{" "}
                                {employe.cargo}
                              </div>
                              <div className="text-sm leading-normal text-blueGray-400 font-bold ">
                                {employe.tipo === "Empleado" ? (
                                  <>
                                    {" "}
                                    <i className="fas fa-user-tie mr-2 mb-2 text-lg text-blueGray-400"></i>{" "}
                                    {employe.tipo}{" "}
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <i className="fas fa-user-cog mr-2 mb-2 text-lg text-blueGray-400"></i>{" "}
                                    {employe.tipo}
                                  </>
                                )}
                              </div>
                            </div>
                          </div>{" "}
                        </Fade>
                      </div>
                    </Fade>
                  </>
                ))}
              </div>
            </Fade>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Formulario de contacto
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  No dudes en ponerte en contacto con nostros para cualquier
                  duda,sugerencia o pregunta. Estamos a tu disposición las 24
                  horas del dia.
                </p>
              </div>
            </div>
            <Fade bottom>
              <div className="flex flex-wrap mt-6 mb-6 justify-center">
                <div className="order-1 col-span-1 md:py-5 w-full mb-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9341419260245!2d-3.8050105847416904!3d40.43245717936327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41879da16e840d%3A0x49d86a64ab9d8a6a!2sExport%20Trading%20Group%20Commodities%20(ETG)%20-%20Spain!5e0!3m2!1ses!2ses!4v1655404393838!5m2!1ses!2ses"
                    title="map"
                    scrolling="no"
                    height="180%"
                    width="100%"
                    frameborder="0"
                    className=" "
                  />
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <section className="relative flex flex-cols py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4" name="#contact">
                <Fade top>
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl font-semibold ">
                        ¿Quieres saber mas acerca de nosotros?
                      </h4>
                      <h6 className="text-2xl font-semibold flex justify-center mt-3">
                        Contactanos!
                      </h6>
                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        Nuestro equipo de atencion al cliente te contestara en
                        la medida de lo posible,lo antes posible.
                      </p>
                      <form onSubmit={sendEmail}>
                        <Fade right>
                          <div className="relative w-full mb-3 mt-8">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="nombre"
                            >
                              Nombre
                            </label>
                            <input
                              type="text"
                              name="nombre"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Introduce tu nombre"
                            />
                          </div>
                        </Fade>
                        <Fade left>
                          <div className="relative w-full mb-3 mt-8">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="apellido"
                            >
                              Apellido
                            </label>
                            <input
                              type="text"
                              name="apellido"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Introduce tu apellido"
                            />
                          </div>
                        </Fade>

                        <Fade top>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Introduce tu email"
                            />
                          </div>
                        </Fade>

                        <Fade left>
                          <div className="relative w-full mb-3 mt-8">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="asunto"
                            >
                              Asunto
                            </label>
                            <input
                              type="text"
                              name="asunto"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Introduce el asunto del mensaje"
                            />
                          </div>
                        </Fade>

                        <Fade left>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="mensaje"
                            >
                              Message
                            </label>
                            <textarea
                              rows="4"
                              cols="80"
                              name="mensaje"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                              placeholder="Introduce el mensaje que quieras enviar"
                            />
                          </div>
                        </Fade>
                        <Fade bottom>
                          <div className="text-center mt-6">
                            <button
                              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="submit"
                            >
                              Enviar
                            </button>
                          </div>
                        </Fade>
                      </form>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
