import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


function Photos() {
    let slidesPerView = 1;
    if (window.innerWidth > 800) {
        slidesPerView = 2;
        if (window.innerWidth > 1200) {
            slidesPerView = 3;
        }
    }

    return (
        <section className='h-screen'>
            <Swiper
            modules={[Navigation]}
                slidesPerView={slidesPerView}
                navigation
                loop
                injectStyles={[
                    `
                        .swiper-button-next {color: red;}
                    `
                ]}
                >
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/group2.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/1.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/2.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/3.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/4.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/5.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/6.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/7.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/8.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/9.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/10.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/11.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/12.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/13.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/14.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/15.jpg'/></SwiperSlide>
                <SwiperSlide><img className='h-screen object-cover' src='den-der-hale/images/slides/16.jpg'/></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Photos;