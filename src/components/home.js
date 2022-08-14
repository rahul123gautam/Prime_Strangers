import React from 'react'
import styled from 'styled-components'
import ImgSlider from './imgSlider'
import Channels from './channels'
import Videos from './videos'
import Vlogs from './vlogs'

const Home = () => {
  return (
    <Container>
        <ImgSlider/>
        <Channels/>
        <Videos/>
        <Vlogs/>
    </Container>
  )
}

export default Home

const Container = styled.main`
     min-height:calc(100vh - 80px);
     padding: 0 calc(3.5vw += 5px);
     position:relative;
     overflow-x: hidden;

     &:before{
        //background: url("./image/home-background.png") center center / cover 
        // no-repeat fixed;
        content:"";
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
     }
`