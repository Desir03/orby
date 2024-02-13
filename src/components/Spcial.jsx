import React from 'react'
import Container from './Container'
import Flex from './Flex'
import to from '../assets/Product_1 (1).png'
import tt from '../assets/Product_2 (1).png'
import th from '../assets/Product_3 (1).png'
import tf from '../assets/Product_4 (1).png'

const Spcial = () => {
  return (
   <div className="">
     <Container>
        <h2 className='font-dm font-bold text-[50px]' >Special Offers</h2>
            <Flex className="justify-between pb-[120px]">
                <div className="">
                    <img src={to } alt="" />
                </div>
                <div className="">
                    <img src={tt } alt="" />
                </div>
                <div className="">
                    <img src={ th} alt="" />
                </div>
                <div className="">
                    <img src={ tf} alt="" />
                </div>
            </Flex>
        </Container>
   </div>
  )
}

export default Spcial