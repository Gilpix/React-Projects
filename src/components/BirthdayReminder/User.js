import React from "react";

function User(props) {
    return (
        <div className="col-12 user-sec">
            <div className='row'>
                <div className='col-4 col-md-3'>
                    <div className="user-img-div">
                        <img
                            className="user-img"
                            src={props.user.image}
                            alt='React Mania'
                        ></img>
                    </div>
                </div>
                <div className='col-8 col-md-9 my-auto pt-1'>
                    <h5 style={{ textAlign: 'left', fontWeight: '700' }}>{props.user.name}</h5>
                    <p style={{ textAlign: 'left' }}>{props.user.date}</p>
                </div>
            </div>
        </div>
    );
}

export default User;
