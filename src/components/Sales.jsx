import React from 'react'
import Container from './Container'
import Flex from './Flex'
import a1 from '../assets/Ad_1.png'
import a2 from '../assets/Ad_2.png'
import a3 from '../assets/Ad_3.png'
const Sales = () => {
  return (
<div className=" py-[60px]">
<Container>
    <Flex className='justify-between'>
        <div className="w-[49%]">
            <img src={a1} alt="" />
        </div>
        <div className="w-[49%]">
            <div className=""> 
            <img src={a2} alt="" />
            </div>
            <div className="mt-10"> 
            <img src={a3} alt="" />
            </div>
        </div>
    </Flex>
</Container>
</div>
    )
}

export default Sales