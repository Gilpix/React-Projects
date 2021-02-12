import React from 'react';

import { Link, withRouter } from "react-router-dom";


import { projectsData } from ".././projectsData";



function Home() {
    document.body.style = 'background: #faf5dc'

    // const [project, setProject] = React.useState('hhhh');

    return (
        <div>
            <div className='header'>
                <h1 className='header-text'>
                    <span className='letter-anim transition big-letter'>R</span>
                    <span className='letter-anim transition'>e</span>
                    <span className='letter-anim transition'>a</span>
                    <span className='letter-anim transition'>c</span>
                    <span className='letter-anim transition'>t</span>
                    <span> </span>

                    <span className='letter-anim transition big-letter'>P</span>
                    <span className='letter-anim transition'>r</span>
                    <span className='letter-anim transition'>o</span>
                    <span className='letter-anim transition'>j</span>
                    <span className='letter-anim transition'>e</span>
                    <span className='letter-anim transition'>c</span>
                    <span className='letter-anim transition'>t</span>
                    <span className='letter-anim transition'>s</span>


                </h1>
            </div>

            <div className='my-5 text-center'>
                <h1 className='heading-text' >Basic Projects</h1>
                <hr className='heading-hr'></hr>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    {projectsData.map((data) => {
                        const { id, name, image, learn, link } = data;
                        // setProject(name);
                        // project = name;

                        return (
                            <div key={id} className='col-md-6 col-lg-4 project-size' >
                                <Link className='link' to={{
                                    pathname: link, state: {
                                        project: "project"
                                    }
                                }}>
                                    <div className='project-block' >
                                        <h5 className='py-3 my-0' style={{ color: '#617d98', letterSpacing: '1px', fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif', fontWeight: '900' }}>{name}</h5>
                                        <img className='pro-image' src={image} alt=""></img>

                                        <h6 className='py-3 my-0' style={{ color: '#617d98', fontWeight: '700' }}>{learn}</h6>
                                    </div>
                                </Link>
                            </div>

                        )
                    })}
                </div>
            </div>

            <div className='footer'>
                <h5 className='footer-text'>Handcrafted by Kuldeep Singh</h5>
            </div>

        </div >
    )
}

export default withRouter(Home);
