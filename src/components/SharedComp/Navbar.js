import React from 'react'

function Navbar() {
    return (
        <div>
            <header>
                {/* <div className="bg-warning py-2">
                    <div className="container">
                        Some top header info
	</div>
                </div> */}
                <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark bg-primary " >
                    <div className="container">
                        <a className="navbar-brand" href="#">ReactMania</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="#"> Home </a></li>
                                <li className="nav-item"><a className="nav-link" href="#"> Basic </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Navbar
