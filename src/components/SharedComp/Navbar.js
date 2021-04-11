import React from 'react'

function Navbar() {

    return (
        <>
            <header>

                <nav id="navbar_top" className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary " >
                    <div className="container">
                        <a className="navbar-brand" href="/"><img id='logo' src='assets/logo.png' alt='React Mania'></img> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="/#home"> Home </a></li>
                                <li className="nav-item"><a className="nav-link" href="/#basicProjects"> Basic </a></li>
                                <li className="nav-item"><a className="nav-link" href="/#latest-project-section"> Latest </a></li>
                                <li className="nav-item"><a className="nav-link" href="/#curved-section"> Tech </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar
