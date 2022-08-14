import React from 'react'
import styled from 'styled-components'

export default function Channels(){

    const Uc =()=>{
        window.open("https://www.youtube.com/c/adarshuc")
    }
    const Extra =()=>{
        window.open("https://www.youtube.com/channel/UCYnxo_wZs2WFmGt11SLSkYQ")
    }
    const Singh =()=>{
        window.open("https://www.youtube.com/c/AdarshSinghUC")
    }
  return (
    <div>
        <H>Channels</H>
        <Container>
            <Wrap >
                <img src="./image/slider-1.png" alt="h" onClick={Uc}></img>
            </Wrap>
            <Wrap>
                <img src="./image/slider-2.jpg" alt="h" onClick={Extra}></img>
            </Wrap>
            <Wrap>
                <img src="./image/slider-3.png" alt="h" onClick={Singh}></img>
            </Wrap>
            <Wrap>
                <img src="./image/slider-2.jpg"  alt="h" onClick={Extra}></img>
            </Wrap>
            <Wrap>
                <img src="./image/slider-3.png" alt="h" onClick={Singh}></img>
            </Wrap>
        </Container>
    </div>
  )
}



const H = styled.h2`
    margin-bottom: 0;
    color: #333;
    margin-left: 20px;
    text-decoration: none;
    font-weight:500;
`
const Container = styled.div`
    display: grid;
    margin:0 20px;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 250px)); 
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
        transform: scale(1.2);
        border-color: rgba(249, 249, 249, 0.0);
    }

`