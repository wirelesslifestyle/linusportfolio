import React from "react";
import { Link } from 'react-router-dom';

//import project information
import projectInfo from '../data/ProjectInfo';

//import Swiper React components
import {Swiper, SwiperSlide } from "swiper/react";

//import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function PageWork() {

    // function outputLanguage(lang){
    //     if(lang === 'html5'){
    //         return <SiHtml5 size={40} color='orange' />
    //     }else if(lang === 'php'){

    //     }
    // }

    return (
        <div className="pagework-container">
            <Swiper spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    }}
                    // pagination={{
                    // clickable: true,
                    // }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">

                {projectInfo.map((singleProject, i) =>
                    <React.Fragment key={Math.random()}> 
                        <SwiperSlide >
                            <div className="pagework-singeslide">                                  
                                <h2>{singleProject.title} </h2>
                                <img src={singleProject.img} alt={singleProject.alt} />
                                <br />
                                <div className="pagework-technology"> 
                                    {/* <div>{outputLanguage(singleProject.language)}</div>                                        */}
                                    <div>{singleProject.language}</div>
                                    <div>{singleProject.technology}</div> 
                                </div>
                                <br />
                                <div className="pagework-moreinfo">
                                    <Link to={`/work/${singleProject.id}`}>More Info</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </React.Fragment>
                )}        
            </Swiper>
        </div>
    )
}

export default PageWork
