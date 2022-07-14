import React from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// install Virtual module
SwiperCore.use([Navigation, Pagination]);

export default function Carousels({images}) {



    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{

                    1000: {
                        slidesPerView: 2,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }}

            >
                {images.map((data) => {
                    return (
                        <SwiperSlide key={data.id}>
                          <Image src={data.Image} height={350} width={700} layout="fixed"
                           />
                        </SwiperSlide>
                    )

                })}


            </Swiper>


        </>
    );
}
