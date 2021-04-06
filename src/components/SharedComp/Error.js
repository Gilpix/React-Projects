import React from 'react'
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className='projects-main-div'>
            <div className='container vertical-center  text-center py-5' style={{ height: '100vh' }}>
                <div className='row'>
                    <div className='col-12'>
                        <p className='home-heading-text w-100'>404 page not found</p>
                    </div>
                    <div className='col-12'>
                        <Link className='back-hto-home' to='/'>Back To Home</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Error
