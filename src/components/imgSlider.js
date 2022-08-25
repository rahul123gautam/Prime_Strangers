import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {

  let setting = {
    dots: true,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Carousel {...setting}>
        <Wrap>
           <img src="./image/slider-2.jpg" alt="h"/>
        </Wrap>
        <Wrap>
           <img src="./image/slider-1.png" alt="h"/>
        </Wrap>
        <Wrap>
           <img src="./image/s-slider-1.jpg" alt="h"/>
        </Wrap>
        <Wrap>
           <img src="./image/slider-3.png" alt="h"/>
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin: 0 25px;
    margin-top: 10px;

    .slick-slide {
        padding: 0 px;
        box-sizing: border-box;
     }

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }


    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow:visible;
    }

    button {
        z-index: 1;
    }


`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width:100%;
        height:300px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
            
        }
        
    }
    @media (max-width: 480px){
        img{
            width:100%;
            height: 220px;
        }
    }
`