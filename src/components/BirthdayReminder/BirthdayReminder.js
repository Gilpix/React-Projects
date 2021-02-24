import React from 'react'

import User from './User';
import { birthdayData } from './birthdayData';
import Header from '../SharedComp/Header';

function BirthdayReminder() {

    const [singleUser, setUser] = React.useState(birthdayData);
    let [isEmpty, setIsEmpty] = React.useState("Gotcha");
    // let buttonText = "Gotcha";

    const clickHandler = () => {
        if (isEmpty === "Gotcha") {
            setUser([]);
            setIsEmpty("Refresh")
        }
        else {
            setUser(birthdayData);
            setIsEmpty("Gotcha");
        }
    }

    document.body.style = 'background: rgba(204, 173, 116, .8)'

    return (
        <>
            <Header heading='Birthday Reminder'></Header>

            <div >
                <div className='container' >

                    <section className='birthday-section'>
                        {singleUser.map((user) => {
                            return <div key={user.id}><User user={user} ></User></div>;
                        })}
                        <button className='btn btn-sm btn-danger' onClick={clickHandler}>{isEmpty}</button>

                    </section>

                </div>
            </div>
        </>
    )
}

export default BirthdayReminder
