import React from 'react'
import Container from './Container'
import Flex from './Flex'
import no from "../assets/Product_1.png"
import nt from "../assets/Product_2.png"
import nh from "../assets/Product_3.png"
import nf from "../assets/Product_4.png"
import at from "../assets/Ads_2.png"



const Basic = () => {
  return (
    <div className=" ">
        <Container>
            <Flex className="justify-between">
                <div className="">
                    <img src={no } alt="" />
                </div>
                <div className="">
                    <img src={nt } alt="" />
                </div>
                <div className="">
                    <img src={ nh} alt="" />
                </div>
                <div className="">
                    <img src={ nf} alt="" />
                </div>
            </Flex>
            <div className="py-[120px]">
                <img src={at} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Basic