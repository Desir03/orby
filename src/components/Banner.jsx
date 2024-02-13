import React from 'react'
import ban from '../assets/ban.png'
import Slider from "react-slick";



const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      arrows :false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            position : "absolute",
            top :"50%",
            left:"50px",
            transform :"translateY(-50%)"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "black",
            padding : "20px 0px ",
            borderRight: "3px #fff solid",
           
          }}
        >
          0{i + 1}
        </div>
      )
    }
  return (
    <>
      <Slider {...settings}>
       
        <div className="h-[250px] lg:h-full ">
            <img src={ban} className='h-full w-full' alt="" />
            </div>
        <div className="h-[250px] lg:h-full">
            <img src={ban} className='h-full  w-full' alt="" />
        </div>
        <div className="h-[250px] lg:h-full">
            <img src={ban} className='h-full  w-full' alt="" />
        </div>
        </Slider>
    </>
  )
}


export default Banner