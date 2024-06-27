import React from 'react'
import NavBar from './NavBar'
import { IoIosCloseCircleOutline, IoIosSearch } from "react-icons/io";
import SliderTop from './Home/SliderTop';
import CategoryThree from './Home/CategoryThree';
import CategoryTab from './Home/CategoryTab';
import Banner from './Home/Banner';
import Arrival from './Home/Arrival';
import { LiaInfoCircleSolid } from "react-icons/lia";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import Blog from './Home/Blog';
import Feature from './Home/Feature';



function Home() {
    return (
        <>
          <SliderTop />
            <CategoryThree />
            <CategoryTab/>
            <Banner/>
            <Arrival/>
           <Blog/>
           <Feature/>
           

        </>

    )
}

export default Home