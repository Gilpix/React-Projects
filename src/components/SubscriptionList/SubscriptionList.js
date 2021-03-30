import React from 'react';
import Header from '../SharedComp/Header';


function SubscriptionList() {
    // document.body.style = 'background: rgba(104,151,187, 1)';

    const demoData = [
        { name: 'Kuldeep Singh', email: 'kulsinggh@gmail.com', mobile: '5142938765' },
        { name: 'Samuel Doe', email: 'samuel@gmail.com', mobile: '5142938765' },
        { name: 'Anjkal Granger', email: 'granger@gmail.com', mobile: '5141138765' },
        { name: 'John Blaze', email: 'blazejohn@gmail.com', mobile: '5156738765' }
    ]
    const [user, setUser] = React.useState({ name: '', email: '', mobile: '' });
    const [people, setPeople] = React.useState(demoData);


    const onChangeHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
        console.log(name + value)
    }


    const onSubmitHandle = (e) => {
        e.preventDefault();

        if (user.name && user.email && user.mobile) {
            // console.log(user);
            setPeople([...people, user]);
            setUser({ name: '', email: '', mobile: '' })
        }

    }
    console.log("Render")






    return (
        <div className='projects-main-div'>


            <Header heading='SubscriptionS'></Header>

            <div className="container pt-5">
                <h5 className='text-subscribe'>Total Subscriptions : {people.length}</h5>
                <p className='text-subscribe-small'>Please click below to subscribe to our newsletter.</p>
                <button className=' want-to-subscribe ' data-toggle="modal" data-target="#exampleModalCenter">Subscribe To List</button>
                {/* <button className={isShown} onClick={toggleHandler}>Subscribe To List</button> */}


            </div>

            <div className='container mt-5'>
                <h5 className='pt-2 pb-1 info-text' style={{ color: '#3b586e', fontSize: '2.5rem', fontWeight: '700' }}>Subscribers Info</h5>
                <hr style={{ border: '.5px solid #ddeefa', marginTop: '0px' }}></hr>
                <div className='row'>
                    {
                        people.map((single, i) => {
                            return <div key={i} className='col-12 col-md-6 col-lg-4 my-3'>
                                <div className='subscription-user-block py-2 px-3'>
                                    <div >
                                        <p className='sub-user-text mb-0 '>Name  : <span> {single.name}</span> </p>
                                        <p className='sub-user-text mb-0'>Email : <span> {single.email}</span> </p>
                                        <p className='sub-user-text mb-0'>Phone : <span> {single.mobile}</span> </p>

                                    </div>

                                </div>

                            </div>

                        })
                    }

                </div>
            </div>


            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered " role="document">
                    <div className="modal-content subscribe-form">
                        <div className="modal-header pl-5 pt-1" style={{ border: 'none' }}>
                            <h5 className="modal-title mx-auto pl-5 modal-text-big" id="exampleModalLongTitle">Subscribe</h5>
                            <button type="button" className="close float-right" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='subscribe-form my-0 pt-0 w-100' onSubmit={onSubmitHandle}>
                                <input type='text' id='name' name='name' placeholder='enter full name' value={user.name} onChange={onChangeHandle} ></input>
                                <input type='email' id='email' name='email' placeholder='enter your email' value={user.email} onChange={onChangeHandle} ></input>
                                <input type='tel' id='mobile' name='mobile' placeholder='enter mobile no.' value={user.mobile} onChange={onChangeHandle} ></input>

                                <button className='want-to-subscribe w-100 my-3' style={{ borderRadius: '25px' }} >Submit your details</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubscriptionList
