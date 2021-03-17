import React from 'react'

function Modal({ isModalOpen }) {
    console.log(isModalOpen)
    if (isModalOpen === true)
        return (<>
            <span className='m-0 cruncher-error-text'>Think Positive...!!!</span>
        </>)
    else
        return (<>
            <span className='m-0 cruncher-error-text'>  </span>
        </>)

}

export default Modal
