import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";


export default function Carousels({ images }) {

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
              
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{

                    1000: {
                        slidesPerView: 2.5,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {images.map((data) => {
                    return (
                        <SwiperSlide key={data.id}>

                            <img className='h-[300px] md:h-[400px] rounded-2xl md:rounded-none' src={data.Image} alt="gallery image"
                            />
                        </SwiperSlide>
                    )

                })}
            </Swiper>
        </>
    );
}










