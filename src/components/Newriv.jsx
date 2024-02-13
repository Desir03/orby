import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";



function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className='next'
        onClick={onClick}
      >< FaArrowRight className=' inline-block'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
       className='prev'
        onClick={onClick}
      >< FaArrowLeft className=' inline-block' /></div>
    );
  }

const Newriv = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
let [info , setInfo] = useState([])


useEffect(()=>{

let getdata = () =>{
axios.get("https://dummyjson.com/products").then((respone)=>{
setInfo(respone.data.products);
})
}
getdata()

},[])




  return (
    <div className=" py-5">
        <Container>
<h2 className='font-dm font-bold text-[50px]'>New Arrivals</h2>
            

<Slider {...settings} >

  {info.map((item)=>(
        <div className="!w-[95%]">
        <div className=" py-3">
        <div className=" relative group overflow-hidden">
            <img src={ item.thumbnail } className='
           h-[250px]' alt="" />
            <div className=" absolute left-0 bottom-0 w-[100%] bg-[#F5F5F5] h-[0px] opacity-0 group-hover:h-[200px]  group-hover:opacity-100 duration-300 ease-in">
                <div className="  flex justify-end   ">
                <ul className='pt-[30px] px-[40px]'>
                        <li className='font-dm font-normal hover:font-bold text-[20px] duration-300 ease-in flex items-center py-2 gap-2'>Add to Wish List <FaHeart/> </li>
                        <li className='font-dm font-normal hover:font-bold text-[20px] duration-300 ease-in flex items-center py-2 gap-2' >Compare < FaCodeCompare/></li>
                        <li className='font-dm font-normal hover:font-bold text-[20px]duration-300 ease-in flex items-center  py-2 gap-2' >Add to Cart <FaShoppingCart/></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex justify-between pt-3 items-center ">
            <h3 className='font-dm font-normal  text-[black]   text-[20px]'>{item.title};</h3>
            <p className='font-dm font-normal  text-[gray] text-[17px]'>{item.price}</p>
        </div>
            </div>
</div> 

    ))}
    
  
</Slider>
 
        
        </Container>
    </div>
  )
}

export default Newriv