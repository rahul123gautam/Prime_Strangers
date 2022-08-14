import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Videos = () => {

    let setting = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            }
        ]
    };

  return (
     <>
        <Container1>
        <H>Omegle Videos</H>
        <Carousel {...setting}>
            <Wrap>
                <img src="./image/video-1.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-2.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-3.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-4.jpg" alt='h'/>
            </Wrap>
            <Wrap>
                <img src="./image/video-5.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-6.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-7.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-8.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-9.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-10.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-11.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-12.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-13.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-14.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-15.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-16.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-17.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-18.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-19.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-20.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-21.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-22.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-23.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-24.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-25.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-26.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-27.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-28.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-29.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-30.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-31.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-32.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-33.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/video-34.jpg" alt="h"/>
            </Wrap>
        </Carousel>
    </Container1>

    <Container1>
        <Carousel {...setting}>
            <Wrap>
                <img src="./image/svideo-1.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/svideo-2.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/svideo-3.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-4.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-5.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-6.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-7.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-8.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/svideo-9.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-10.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/svideo-11.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/svideo-12.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-13.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/svideo-14.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-15.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-16.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/svideo-17.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-18.jpg" alt="h" />
            </Wrap>
            <Wrap>
                <img src="./image/svideo-19.jpg" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/svideo-20.jpg" alt="h" />
            </Wrap>
        </Carousel>
    </Container1>
     </>
  )
}

export default Videos

const Container1 = styled.div`
    
`

// const Carousel = styled.div`
//     margin:0 20px;
//     display: grid;
//     padding: 30px 0px 26px;
//     grid-gap: 25px;
//     justify-content:center;
//     grid-template-columns: repeat(4, minmax(0, 1fr));
// `
const H = styled.h2`
    color:#333;
    margin: 0 0 20px 20px;
    font-weight:500;
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 500ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;


    img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.1);
        border-color: rgba(249, 249, 249, 0.0);
    }
`

const Carousel = styled(Slider)`
    margin: 0 20px 20px 20px;
    // margin-top: 20px;
    
    .slick-slide {
        padding: 0 8px;
        box-sizing: border-box;
     }

    //  &:hover{
    //     .slick-prev:before {
    //         content: "<";
    //         color: black;
    //         font-size: 30px;
    //         font-weight: 900;
    //       }
          
    //       .slick-next:before {
    //         content: ">";
    //         color: white;
    //         font-size: 30px;
    //         font-weight: 900;
    //       }
    //  }
    .slick-list{
        overflow:visible;
    }

    button {
        z-index: 1;
    }


`