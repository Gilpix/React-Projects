import React from 'react'

function Header(props) {
    return (
        <div>
            <div className='mt-5'>
                <h1 className='heading-text'  >{props.heading}</h1>
                <hr className='heading-hr'></hr>
            </div>
            <div className='container mb-5 mt-3'>
                <div className='w-100 float-left ' style={{ textAlign: 'left' }}>
                    <a className="back-button " href="/"><span><i class="fa fa-chevron-left"></i></span><span className="back-text">back</span></a>
                </div>
                <div className='w-50 float-right' style={{ textAlign: 'right' }}>
                    <a className="back-button " href="/">  </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
