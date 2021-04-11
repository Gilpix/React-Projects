import React from 'react'
import Header from '../SharedComp/Header';
import Modal from './Modal'


const initialState = {
    count: 0,
    isModalOpen: false
}

function reducer(state, action) {
    PlaySound();

    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1, isModalOpen: false };
        case 'DECREMENT':
            return {
                ...state, count: state.count - 1, isModalOpen: false
            };
        case 'NEGATIVE':
            return { ...state, isModalOpen: true };
        default:
            throw new Error();
    }
}

function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play()
}



function NumberCruncher() {
    // document.body.style = 'background:  #3a9da7';



    const [state, dispatch] = React.useReducer(reducer, initialState);

    const clickHandle = (type) => {

        if (state.count >= 1) {
            if (type === 'INCREMENT')
                dispatch({ type: 'INCREMENT' })
            else if (type === 'DECREMENT')
                dispatch({ type: 'DECREMENT' })
        }
        else if (state.count === 0 && type === 'INCREMENT')
            dispatch({ type: 'INCREMENT' })
        else
            dispatch({ type: 'NEGATIVE' })
    }



    return (
        <div className='projects-main-div'>
            <Header heading='Number Cruncher'></Header>

            <div className='container cruncher-container vertical-center  text-center py-5'>
                {/* <div className='vertical-center-cruncher  h-100' style> */}
                <div className='row w-100'>
                    <div style={{}} className='col-12 my-auto' >
                        <p style={{ minHeight: '25px' }}>
                            <Modal isModalOpen={state.isModalOpen}></Modal>
                        </p>

                    </div>
                    <div className='col-6 col-md-4 plus my-auto order-2 order-sm-1'>
                        <i className="fa fa-5x fa-minus-square cruncher-icon " onClick={() => { clickHandle('DECREMENT') }}></i>
                    </div>
                    <div className='col-12 col-md-4 my-auto order-1 order-sm-2'>
                        <p className='counter-text m-0'>{state.count}</p>
                    </div>
                    <div className='col-6 col-md-4 minus my-auto order-3 order-sm-3'>
                        <i className="fa fa-5x fa-plus-square cruncher-icon " onClick={() => { clickHandle('INCREMENT') }}></i>

                    </div>

                </div>
                {/* </div> */}

            </div>
            <audio id="audio" src="https://www.soundjay.com/button/sounds/button-25.mp3" autostart="false" ></audio>

        </div>
    )
}

export default NumberCruncher
