import React from 'react'
import Header from '../SharedComp/Header';
import Modal from './Modal'





function NumberCruncher() {
    document.body.style = 'background: 	#3a9da7';







    return (
        <>
            <Header heading='Number Cruncher'></Header>
            <div className='container cruncher-container vertical-center  text-center py-5'>
                {/* <div className='vertical-center-cruncher  h-100' style> */}
                <div className='row w-100'>
                    <div style={{}} className='col-12 my-auto' >
                        <p style={{ minHeight: '25px' }}>
                        </p>

                    </div>
                    <div className='col-6 col-md-4 plus my-auto order-2 order-sm-1'>
                        <i className="fa fa-5x fa-minus-square cruncher-icon " ></i>
                    </div>
                    <div className='col-12 col-md-4 my-auto order-1 order-sm-2'>
                        <p className='counter-text m-0'>155</p>
                    </div>
                    <div className='col-6 col-md-4 minus my-auto order-3 order-sm-3'>
                        <i className="fa fa-5x fa-plus-square cruncher-icon " ></i>

                    </div>

                </div>
                {/* </div> */}

            </div>

        </>
    )
}

export default NumberCruncher
