import * as React from "react"
import ImgData from "../data/imgData"
import useSwiperRef from "./useSwiperRef"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper"
// swiper css
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import "swiper/css/lazy"

SwiperCore.use([Autoplay, Pagination, Navigation])

const ImageSlider = () => {
    const [nextEl, nextElRef] = useSwiperRef()
    const [prevEl, prevElRef] = useSwiperRef()
  return (
      <div className="text-center">
        <Swiper
            pagination={{
                type: "custom",
                el: ".custom-pagination",
                renderCustom: (swiper, current, total) => {
                    function pad(current) {
                        return (current < 10) ? '0' + current.toString() : current.toString();
                    }
                    return '<p>' + pad(current) + '&nbsp;' + 'of' + '&nbsp;' + total + '</p>'
                }
            }}
            navigation={{
                prevEl,
                nextEl
            }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                "delay": 3000
            }}
        >
            {
                ImgData.map((elem, index) => (
                    <SwiperSlide key={index}>
                        <img src={elem.url} />
                    </SwiperSlide>
                ))
            }
            <div className="inline-flex mt-2">
                <button className="w-10 h-10 mr-1 rounded-full border text-gray-400 border-gray-300 items-center justify-center text-3xl transition-colors duration-150 focus:shadow-outline hover:bg-blue-500" ref={prevElRef}>
                    <FaAngleLeft className="m-auto transition-colors duration-150 focus:shadow-outline hover:text-white" />
                </button>
                <button className="w-10 h-10 ml-2 rounded-full border text-gray-400 border-gray-300 items-center justify-center text-3xl transition-colors duration-150 focus:shadow-outline hover:bg-blue-500" ref={nextElRef}>
                    <FaAngleRight className="m-auto transition-colors duration-150 focus:shadow-outline hover:text-white"/>
                </button>
                <div className="custom-pagination"></div>
            </div> 
        </Swiper>
    </div>
  )
}

export default ImageSlider
