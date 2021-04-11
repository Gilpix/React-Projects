import React from 'react'

import { technologiesData } from "../../technologiesData";

function CarouselComponent() {
    return (
        <div>





            <div className="container-fluid  px-md-4  mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-12 col-lg-9 col-xl-8">
                        <div className="card card-main border-0 text-center py-0 my-0">
                            <div id="carouselExampleIndicators" className="carousel slide mb-0" data-ride="carousel" data-interval="3000">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                </ol>
                                <div className="carousel-inner">

                                    {
                                        technologiesData.map((technology, i) => {
                                            const { id, name, about, image } = technology;

                                            if (i === 1) {

                                                return (
                                                    <div key={id} className="carousel-item active">
                                                        <div className='container'>
                                                            <div className='row'>
                                                                <div className='col-12 mx-auto  tech-img-background pt-0'>
                                                                    <div>
                                                                        <img src={image} alt='React Mania'></img>
                                                                        <h6 className="mb-0 mt-4 mb-3">{name}</h6>
                                                                    </div>
                                                                </div>
                                                                <div className='col-12 col-md-10 col-xl-8 mx-auto  '>
                                                                    <div className="card border-0 card-0 ">

                                                                        <img className="img-fluid open-quotes" alt='React Mania' src="https://i.imgur.com/Hp91vdT.png" width="20" height="20"></img>

                                                                        <p className="content mb-0">{about}</p>
                                                                        <img className="img-fluid close-quotes ml-auto" alt='React Mania' src="https://i.imgur.com/iPcHyJK.png" width="20" height="20"></img>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                            }
                                            else {

                                                return (
                                                    <div key={id} className="carousel-item">
                                                        <div className='container'>
                                                            <div className='row'>
                                                                <div className='col-12 mx-auto  tech-img-background'>
                                                                    <div>
                                                                        <img src={image} alt='React Mania'></img>
                                                                        <h6 className="mb-0 mt-4 mb-3">{name}</h6>
                                                                    </div>
                                                                </div>
                                                                <div className='col-12 col-md-10 col-xl-8 mx-auto  '>
                                                                    <div className="card border-0 card-0 ">

                                                                        <img className="img-fluid open-quotes" alt='React Mania' src="https://i.imgur.com/Hp91vdT.png" width="20" height="20"></img>

                                                                        <p className="content mb-0">{about}</p>
                                                                        <img className="img-fluid close-quotes ml-auto" alt='React Mania' src="https://i.imgur.com/iPcHyJK.png" width="20" height="20"></img>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarouselComponent
