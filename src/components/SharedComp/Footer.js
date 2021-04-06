import React from 'react'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className='container-fluid py-2'>
                    <i className="fa fa-eject fa-4x  wheelchair"></i>

                    <div className='row'>
                        <div className='col-12 col-md-4 py-3 order-1'>
                            <a className="footer-logo-div" href="/"><img id='footer-logo' src='assets/logo.png'></img> </a>

                        </div>

                        <div className='col-12 col-md-4 my-auto py-3 order-2'>

                            <div style={{ margin: '0 auto' }}>
                                <i className="fa fa-lg fa-github social-icons"></i>
                                <i className="fa fa-lg fa-instagram social-icons"></i>
                                <i className="fa fa-lg fa-linkedin social-icons"></i>
                                <i className="fa fa-lg fa-code social-icons"></i>
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
