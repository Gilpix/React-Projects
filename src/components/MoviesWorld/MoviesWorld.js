import React from 'react'
import Header from '../SharedComp/Header';

import { useFetch } from "./useFetch";

const url = 'https://imdb-api.com/en/API/MostPopularMovies/' + process.env.REACT_APP_SECRET_NAME;


function MoviesWorld() {

    const { data } = useFetch(url);
    // console.log(data)

    return (
        <div className='projects-main-div'>
            <Header heading='Movies World'></Header>
            <div className='container py-5' >
                <div className='row py-5'>

                    {
                        data.map((movie) => {
                            // const { id, title, image, fullTitle, year } = movie;
                            const { id, title, image } = movie;

                            return (<div key={id} className='col-6 col-sm-4 col-md-4 col-lg-2 transition p-0 image-div'>
                                <img src={image} className='imdb-movie-image transition' alt={title} ></img>
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
