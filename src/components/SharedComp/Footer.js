import React from 'react'

// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className='container-fluid py-2'>
                    <a href="/#"><i className="fa fa-eject transition wheelchair"> </i></a>

                    <div className='row'>
                        <div className='col-12 col-md-4 py-3 order-1'>
                            <a className="footer-logo-div" href="/"><img id='footer-logo' src='assets/logo.png' alt='React Mania'></img> </a>

                        </div>

                        <div className='col-12 col-md-4 my-auto py-3 order-2'>

                            <div style={{ margin: '0 auto' }}>
                                <a href='https://github.com/Gilpix' target=" "><i className="fa fa-lg fa-github social-icons"></i></a>
                                <a href='https://www.instagram.com/kulartist/' target=" "><i className="fa fa-lg fa-instagram social-icons"></i></a>
                                <a href='https://ca.linkedin.com/in/kuldeep1993' target=" "><i className="fa fa-lg fa-linkedin social-icons"></i></a>
                                <a href='https://github.com/Gilpix/ReactMania' target=" "><i className="fa fa-lg fa-code social-icons"></i></a>
                            </div>

                        </div>

                        <div className='col-12 col-md-4 my-auto mail-to py-3 order-3'>
                            <a className="mailto" href="mailto:kulsinggh@gmail.com">kulsinggh@gmail.com</a>

                        </div>

                    </div>

                </div>

            </div>
            <div className='footer-foot-div py-3'>
                <h5 className='footer-text m-0'>© 2020 Copyright - Kuldeep Singh</h5>

            </div>

        </footer>
    )
}

export default Footer
