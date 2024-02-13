import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from '../assets/Logo (2).png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#eae8e8] py-[120px]">
        <Container>
            <Flex>
                <div className="w-[15%]">
                    <div className="">
                        <ul>
                            <li className='font-dm font-bold text-[20px] py-3 text-[black]'>Menu</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Home</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Shop</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>About</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Contect</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Journal</li>


                        </ul>
                    </div>
                </div>
                <div className="w-[15%]">
                <ul>
                            <li className='font-dm font-bold text-[20px] py-3 text-[black]'>Shop</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Category 1</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Category 2</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Category 3</li>
                            <li className='font-dm font-normal text-[17px]  py-3 text-[#767676]'>Category 4</li>
                            <li className='font-dm font-normal text-[17px]  py-3 text-[#767676]'>Category 5</li>

                           
                        </ul>
                </div>
                <div className="w-[15%]">
                <ul>
                            <li className='font-dm font-bold text-[20px] py-3 text-[black]'>Help</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Privacy Policy</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Terms & Conditions</li>
                            <li className='font-dm font-normal text-[17px] py-3 text-[#767676]'>Special E-shop</li>
                            <li className='font-dm font-normal text-[17px]  py-3 text-[#767676]'>Shipping</li>
                            <li className='font-dm font-normal text-[17px]  py-3 text-[#767676]'>Secure Payments</li>

                           
                        </ul>
                </div>
                <div className="w-[20%]"> 
                <h2 className='font-dm font-bold text-[22px] py-3 text-[black]'>(052) 611-5711
company@domain.com</h2>
                <p className='font-dm font-normal text-[15px] py-3 text-[#767676]'>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                <div className="w-[35%]">
                    <div className="pl-[140px]">
                        <div className="">
                        <img src={logo} className='h-[30px]' alt="" />

                        </div>
                    </div>
                </div>

            </Flex>
            <div className="flex justify-between">
                <div className="flex gap-2 py-7">
<FaFacebookF />
<FaLinkedinIn/>
<FaInstagram/>
                </div>
                <div className="">
                    <h3  className='font-dm font-normal text-[15px] py-3 text-[#767676]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h3>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer