import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import ful from '../assets/ful.png'
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [cartshow, setcaetshow] =useState(false)
    let [cartacc, setcaetacc] =useState(false)
    let [carta, setcarta] =useState(false)

let categoryRef = useRef()
let cartaccRef = useRef()
let cartaRef = useRef()


    useEffect (()=>{
document.addEventListener ("click",(e)=>{

    if(categoryRef.current.contains(e.target)==true){
        setcaetshow(!cartshow)
    }else{
        setcaetshow(false)
    }
    if(cartaccRef.current.contains(e.target)==true){
        setcaetacc(!cartacc)
    }else{
        setcaetacc(false)
    }
    if(cartaRef.current.contains(e.target)==true){
        setcarta(!carta)
    }else{
        setcarta(false)
    }
})
    },[cartshow,cartacc,carta])

    

  return (
<nav className='bg-[#f5f5f3]'>
    <Container>
        <Flex className=' items-center py-5 '>
        <div className=" w-full lg:w-1/4 relative ">
            <div className="flex items-center"  ref={categoryRef}>
                <FaBars />
                <p className='pl-3'>Shop by Category</p>
                </div>
                {cartshow && <div className=" bg-[#262626] absolute top-[35px] left-0 w-full z-10 ">
                    <ul> 
                        <li className='text-[rgba(255,255,255,0.70)] py-4 pl-4 hover:text-white
                        hover:pl-8 duration-300 ease-in ' >Accesories</li>
                        <li className='text-[rgba(255,255,255,0.70)] py-4 pl-4 hover:text-white
                        hover:pl-8 duration-300 ease-in '>Furniture</li>
                        <li className='text-[rgba(255,255,255,0.70)] py-4 pl-4 hover:text-white
                        hover:pl-8 duration-300 ease-in '>Electronics</li>
                        <li className='text-[rgba(255,255,255,0.70)] py-4 pl-4 hover:text-white
                        hover:pl-8 duration-300 ease-in '>Clothes</li>
                        <li className='text-[rgba(255,255,255,0.70)] py-4 pl-4 hover:text-white
                        hover:pl-8 duration-300 ease-in '>Bags</li>
                        <li className='text-[rgba(255,255,255,0.70)] py-4 pl-4 hover:text-white
                        hover:pl-8 duration-300 ease-in '>Home appliances</li>  
                    </ul>
                </div>}
            </div> 
        
        <div className=" w-full lg:w-1/2 relative">
<div className=" ">
<input type="search" placeholder='Search...' className='w-full   outline-0 py-3 px-2 '/>

</div>
<div className=" absolute top-[50%] right-5 translate-y-[-50%]">
    <IoSearchSharp/>
</div> 
        </div>
        <div className=" w-full lg:w-1/4 ">
          <div className="flex justify-end gap-x-2 relative">
         <div className="">
         <div className="flex" ref={cartaccRef}>
           <FaUser/>
            <IoMdArrowDropdown/>
           </div>
           {cartacc && 
           <div className="bg-[#262626] w-[200px] absolute top-[25px] z-10 right-[20px]  ">
           <ul>
               <li className='text-[rgba(255,255,255,0.70)] py-2 pl-4 hover:text-white
                       hover:pl-8 duration-300 ease-in '><a href="#" >My Account</a>
               
</li>
<li className='text-[rgba(255,255,255,0.70)] py-2 pl-4 hover:text-white
                       hover:pl-8 duration-300 ease-in '><a href="#">Log Out</a></li>
           </ul>
          </div>}
         </div>
        
        <div className="relative " ref={cartaRef} >
        <FaShoppingCart/>
        </div>
        <div className="">
       {carta && <div className="w-[300px] absolute right-0 top-[25px] bg-[#fff] z-10">
<div className="bg-[#F5F5F3] flex p-3 justify-between items-center" >
   <div className="">
<img src={ful} alt="ful" />
   </div>
   <div className="">
    <h2 className='font-dm font-normal text-[17px]'>Black Smart Watch
</h2>
<h3 className='font-dm font-normal text-[14px]'>$44.00</h3>
   </div>
   <div className="">
   <RxCross2/>
   </div>

</div>
<div className="">
<h1 className='pl-3 py-3 font-dm font-normal text-[17px]
           '>Subtotal: $44.00</h1>
<a href="#" className='w-[145px] h-[50px] border-2 border-[#222] inline-block
 leading-[50px] text-center font-dm font-normal text-[17px] hover:bg-[black] 
 hover:text-[white] mr-1'>View Cart</a>
<a href="#"  className='w-[145px] h-[50px] border-2 border-[#222] inline-block
 leading-[50px] text-center font-dm font-normal text-[17px] hover:bg-[black] 
 hover:text-[white] ml-1'>Checkout</a>
</div>
</div>}

        
        </div>
          </div>
        </div>
        </Flex>
    </Container>
</nav>
    )
}

export default Navbar 