import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaChartBar } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import logo from '../assets/Logo (2).png'

const Header = () => {
  let [show, setshow]= useState(false)
  let handleShow = () =>{
    setshow(!show)
  }




  return (
<header className='py-5'>
<Container>
        <Flex className="justify-between" >
    <div className="">
        <img src={logo} alt="" />
    </div> 
    <div className="">
        <ul  className={`lg:flex gap-x-8 lg:static absolute top-0 left-0
        ${show == true ? "bg-[#f5f5f5] text-center w-full z-50 !top-[50px] duration-700 ease-in py-3" :
        " !top-[50px] duration-700 ease-in !left-[-500px] w-full"}`}>
            
            <li><a href="#" className='font-dm font-normal text-[17px]
            hover:text-black text-[#767676]'>Home</a></li>
            <li><a href="#"className='font-dm font-normal text-[17px]
            hover:text-black text-[#767676]'>Shop</a></li>
            <li><a href="#"className='font-dm font-normal text-[17px]
            hover:text-black text-[#767676]'>About</a></li>
            <li><a href="#"className='font-dm font-normal text-[17px]
            hover:text-black text-[#767676]'>Contects</a></li>
            <li><a href="#"className='font-dm font-normal text-[17px]
            hover:text-black text-[#767676]'>Journal</a></li>
          
        </ul>
    </div>
<div className="lg:hidden pr-3" onClick={handleShow}>
{show ? <RxCross2/> :<FaChartBar/>}



</div>
    </Flex>
    </Container>
    
</header>
    
    
  )
}

export default Header