import axios from 'axios';
import React from 'react';
import { withRouter } from "react-router-dom";
import Header from '../SharedComp/Header';





const url = "https://api.github.com/users"

function User(props) {
    // document.body.style = 'background: #C1CDC1'


    // console.log("here : " + JSON.stringify(props))
    // console.log(props.location)

    // const location = props.location.state;

    // const data = useLocation(props)
    // const { name } =
    //     (props.location && props.location.state.name) || {};



    const [users, setUsers] = React.useState([]);

    const getData = () => {
        axios.get(url).then((response) => {
            // console.log(response.data);
            setUsers(response.data)
        })
    }

    React.useEffect(() => {
        getData();

    }, [])


    console.log(users);


    return (
        <>
            <div className='projects-main-div'>
                <Header heading='Github Users'></Header>


                <div className="container mt-5 pt-3 pb-5">
                    <div className='row'>
                        {
                            users.map((user) => {
                                const { login, id, avatar_url, html_url } = user;
                                return (
                                    <div key={id} className='col-12 col-md-6 col-lg-4 '>
                                        <div className='item m-2'>
                                            <img src={avatar_url} alt='React Mania'></img>
                                            <div className='ml-5 mt-1 pl-4'>
                                                <p className="h5 mb-0 w-50" style={{ textTransform: "capitalize" }} >{login}</p>
                                                <a href={html_url}>Check Profile</a>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default withRouter(User)
