import React from 'react'

function Header(props) {
    return (
        <div className='pt-2 pb-3 header-main-div ' >
            <div className='containe'>
                <div className='col-12'>
                    <h1 className='heading-text'  >{props.heading}</h1>
                    {/* <hr className='header-hr'></hr> */}
                </div>
                <div className='container mb-5 mt-4 pt-2'>
                    <div className='w-100 float-left back-btn-div' style={{ textAlign: 'left' }}>
                        <a className="back-button " href="/"><span><i className="fa fa-chevron-left transition"></i></span><span className="back-text">back</span></a>
                    </div>
                    <div className='w-50 float-right' style={{ textAlign: 'right' }}>
                        <a className="back-button " href="/">  </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
