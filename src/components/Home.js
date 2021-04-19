import React from "react";
import { Link, withRouter } from "react-router-dom";

import Footer from "./SharedComp/Footer";

import { projectsData } from ".././projectsData";

import CarouselComponent from "../components/SharedComp/CarouselComponent";

function Home() {
    // document.body.style = 'background: #f7efc5'
    // document.body.style = 'background: #E3CC9F'
    document.body.style = "background:  transparent";

    // const [project, setProject] = React.useState('hhhh');

    return (
        <>
            <main className=" px-0 pb-4">
                <article>
                    <section id="home">
                        <div className="header area ">
                            <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div className="container-fluid">
                                <div className="row ">
                                    <div className="col-12 col-md-6 vertical-center header-sections image-overlay">
                                        <img
                                            className="header-image pt-5"
                                            src="/assets/landing_page.png"
                                            alt=""
                                        ></img>
                                    </div>
                                    <div className="col-12 col-md-6 vertical-center header-sections pb-5">
                                        <div>
                                            <h1 className="header-text w-100">
                                                {/* 
                    <span className='letter-anim transition big-letter'>R</span>
                    <span className='letter-anim transition'>e</span>
                    <span className='letter-anim transition'>a</span>
                    <span className='letter-anim transition'>c</span>
                    <span className='letter-anim transition'>t</span>
                    <span> </span>


                    <span className='letter-anim transition big-letter'>p</span>
                    <span className='letter-anim transition'>r</span>
                    <span className='letter-anim transition'>o</span>
                    <span className='letter-anim transition'>j</span>
                    <span className='letter-anim transition'>e</span>
                    <span className='letter-anim transition'>c</span>
                    <span className='letter-anim transition'>t</span>
                    <span className='letter-anim transition'>s</span> */}

                                                <span className="letter-anim transition">L</span>
                                                <span className="letter-anim transition">e</span>
                                                <span className="letter-anim transition">t</span>
                                                <span className="letter-anim transition">'</span>
                                                <span className="letter-anim transition">s</span>
                                                <span> </span>

                                                <span className="letter-anim transition">D</span>
                                                <span className="letter-anim transition">o</span>
                                                <span> </span>

                                                <span className="letter-anim transition">I</span>
                                                <span className="letter-anim transition">t</span>
                                                <span className="letter-anim transition big-letter">
                                                    !
                        </span>
                                            </h1>
                                            <p className="w-100 header-small-text text-center px-5 pt-2">
                                                ReactMania is a pool of small to big web projects using
                        ReactJs framework{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="social-icons-div">
                                <div style={{ margin: "0 auto" }}>
                                    <a href="https://github.com/Gilpix" target=" ">
                                        <i className="fa fa-lg fa-github social-icons"></i>
                                    </a>
                                    <a href="https://www.instagram.com/kulartist/" target=" ">
                                        <i className="fa fa-lg fa-instagram social-icons"></i>
                                    </a>
                                    <a href="https://ca.linkedin.com/in/kuldeep1993" target=" ">
                                        <i className="fa fa-lg fa-linkedin social-icons"></i>
                                    </a>
                                    <a href="https://github.com/Gilpix/ReactMania" target=" ">
                                        <i className="fa fa-lg fa-code social-icons"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BASIC Projects Section */}
                    <section id="basicProjects">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4 my-5 pt-5 text-center">
                            <h1 className="home-heading-text px-3">Basic Projects</h1>
                            <hr className="heading-hr"></hr>
                        </div>

                        <div className=" pt-4">
                            <div className="basic_project_container py-5 ">
                                <div className="container-fluid ">
                                    <div className="container  ">
                                        <div className="row basic_project_inner_container">
                                            {projectsData.map((data) => {
                                                const { id, name, learn, link } = data;
                                                // setProject(name);
                                                // project = name;

                                                return (
                                                    <article
                                                        key={id}
                                                        className="col-md-6 col-sm-6 col-lg-4 project-size"
                                                    >
                                                        <Link
                                                            className="link"
                                                            to={{
                                                                pathname: link,
                                                                state: {
                                                                    project: "project",
                                                                },
                                                            }}
                                                        >
                                                            <div className="project-block">
                                                                <div className="lbl w-100 h-100">
                                                                    {/* <h5 className='py-3 my-0' style={{ color: '#617d98', letterSpacing: '1px', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif', fontWeight: '900' }}>{name}</h5> */}
                                                                    {/* <img className='pro-image' alt=""></img> */}
                                                                    <h5
                                                                        className="py-3   "
                                                                        style={{
                                                                            letterSpacing: ".5px",
                                                                            border: "none !important",
                                                                            fontWeight: "650",
                                                                            fontSize: "1.45rem",
                                                                            marginLeft: "-100px",
                                                                            marginTop: "35px",
                                                                        }}
                                                                    >
                                                                        {name}
                                                                    </h5>

                                                                    <h6
                                                                        className="py-4 my-0"
                                                                        style={{
                                                                            letterSpacing: "1px",
                                                                            color: "rgba(120, 104, 230, 1)",
                                                                            fontWeight: "500",
                                                                            marginLeft: "-100px",
                                                                            marginTop: "45px",
                                                                        }}
                                                                    >
                                                                        {learn}
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </article>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Show Latest Project Section */}
                    <section id="latest-project-section" className="container my-5 py-3">
                        <div className="row justify-content-en">
                            <div className="col-12 col-md-6 col-lg-4 col-xl-4 my-5 pt-5">
                                <h1 className="home-heading-text">Latest Project</h1>
                                <hr className="heading-hr"></hr>
                            </div>
                        </div>

                        <div className="row align-items-center pb-5 mb-4">
                            <div className="col-12 col-md-6 order-2 py-2 order-md-1">
                                <div className=" vertical-center py-3">
                                    <p className="latest-proj-text  p-2">
                                        Fullstack web app (React, Express, NodeJS) providing a
                                        persistent search engine for searching any word from any
                                        type of text file(small or big file). It comprises two
                                        parts, a web-based user interface(using ReactJs) and a
                                        server component(using NodeJS) that exposes a REST API that
                                        provides search results retrieved from a corpus of text.
                  </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 latest-proj-image-div py-2 order-1 order-md-2 ">
                                <img src="/assets/search_engine.png" alt="React Mania"></img>
                            </div>
                        </div>
                    </section>

                    {/* Show Technologies Used Section */}
                    <section id="curved-section" className="curved py-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                fill="#fff"
                                fillOpacity="1"
                                d="M0,64L80,69.3C160,75,320,85,480,106.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                            ></path>
                        </svg>

                        <div className="curved-heading w-100">
                            <div className="container">
                                <div className="row  ">
                                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 my-5">
                                        <h1 className="home-heading-tex w-100">Technologies</h1>
                                        <hr className="curved-heading-hr"></hr>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CarouselComponent></CarouselComponent>

                        <svg
                            className="pb-0 mb-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#fff"
                                fillOpacity="1"
                                d="M0,64L80,69.3C160,75,320,85,480,106.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                            ></path>
                        </svg>
                    </section>
                </article>
            </main>
            <Footer></Footer>
        </>
    );
}

export default withRouter(Home);
