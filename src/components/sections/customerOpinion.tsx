import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CustomerOpinionCard from './customerOpinionCard';

const customerOpinion = () => {
    return (
        <>
            <section className=''>
                {/*<Swiper*/}
                {/*    spaceBetween={50}*/}
                {/*    slidesPerView={3}*/}
                {/*    onSlideChange={() => console.log('slide change')}>*/}
                {/*    <SwiperSlide>Slide 1</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 2</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 3</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
                {/*</Swiper>*/}
                <CustomerOpinionCard />
            </section>
        </>
    );
}

export default customerOpinion;