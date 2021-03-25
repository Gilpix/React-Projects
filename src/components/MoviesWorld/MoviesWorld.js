import React from 'react'
import Header from '../SharedComp/Header';

import { useFetch } from "./useFetch";


const url = 'https://imdb-api.com/en/API/Top250Movies/' + process.env.REACT_APP_SECRET_NAME;


function MoviesWorld() {
    document.body.style = 'background: rgba(104,151,187, 1)';

    const { data } = useFetch(url);
    // console.log(data)

    return (
        <div>
            <Header heading='Movies World'></Header>



        </div>
    )
}

export default MoviesWorld
