import React from 'react'
import styled from 'styled-components'

const Vlogs = () => {
  return (
    <div>
        <H>Vlog Videos</H>
        <Container>
            <Wrap>
                <img src="./image/slider-1.png" alt="h"/>
            </Wrap>
            <Wrap>
                <img src="./image/slider-2.jpg" alt="h"/>
            </Wrap>
        </Container>
    </div>
  )
}

export default Vlogs

const Container = styled.div`
    display: grid;
    margin:0 20px;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    justify-content:center;
    grid-template-columns: repeat(2, minmax(0, 300px));
    @media (max-width: 480px){
        &{
            grid-template-columns: repeat(1, minmax(0, 250px));
        }
    }

`
const H = styled.h2`
    margin:0 0 0 20px;
    color:#333;
    text-decoration: none;
    font-weight:500;
    @media (max-width: 480px){
        font-size: 16px;
    }
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
        height: 200px;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.1);
        border-color: rgba(249, 249, 249, 0.0);
    }
    @media (max-width: 480px){
        &:hover{
            transform: scale(1);
        }
    }
`