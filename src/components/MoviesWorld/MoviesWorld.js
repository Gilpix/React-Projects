import React from 'react'
import Header from '../SharedComp/Header';

import { useFetch } from "./useFetch";

const url = 'https://imdb-api.com/en/API/MostPopularMovies/' + process.env.REACT_APP_SECRET_NAME;


function MoviesWorld() {
    document.body.style = 'background: #AAAAFF';

    const { data } = useFetch(url);
    // console.log(data)

    return (
        <div>
            <Header heading='Movies World'></Header>
            <div className='container py-5'>
                <div className='row'>

                    {
                        data.map((movie) => {
                            const { id, title, image, fullTitle, year } = movie;
                            return (<div key={id} className='col-6 col-sm-4 col-md-3 col-lg-2 p-0'>
                                <img src={image} className='imdb-movie-image transition' ></img>
                            </div>
                            );
                        })
                    }

                </div>
            </div>


        </div>
    )
}

export default MoviesWorld
