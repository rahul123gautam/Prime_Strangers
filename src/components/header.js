import React from 'react'
import styled from 'styled-components'
import './header.css';


const Header = () => {
  // const hamburger = document.querySelector(".hamburger");
  // const navMenu = document.querySelector(".nav-menu");
  
  // hamburger.addEventListener("click", (event)=>{
  //   hamburger.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // })


  return (
    <Nav>
      <Hamburger className='hamburger'>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
        <Logo src="./image/logo.jpg" alt="h"/>
        <NavMenu className='nav-menu'>
              <a>
                <img src="./image/home-icon.png" alt="h"/>
                <span>HOME</span>
              </a>

              <a>
                <img src="./image/watch-list-icon.png" alt="h"/>
                <span>WATCHLIST</span>
              </a>

              <a>
                <img src="./image/video-icon.png" alt="h"/>
                <span>VIDEOS</span>
              </a>

              <a>
                <img src="./image/vlog-icon.png" alt="h"/>
                <span>VLOG</span>
              </a>
        </NavMenu>
        <SearchLogin>
          <a>
            <img src="./image/search-icon.png" alt="h"/>
            <span>SEARCH</span>
          </a>
          <UserImg src="./image/logo3.jpg" alt="h"/>
        </SearchLogin>
    </Nav>
  )
}

export default Header
const Nav = styled.nav`
     position: sticky;
     top:0;
     z-index:10;
     height:80px;
     background: #121926;
     display:flex;
     align-items:center;
     padding:0 36px;
     overflow-x: hidden;
`
const Logo = styled.img`
     width:60px;
     border-radius:50px;
`
const NavMenu = styled.div`
     display:flex;
     flex:1;
     margin-left:25px;
     align-item:center;
     a{
        cursor:pointer;
        display:flex;
        align-items:center;
        padding:0 12px;
        img{
            height:15px;
        }
        span{
            font-size:14px;
            font-weight:500;
            letter-spacing:1.2px;
            padding-left:4px;
            position:relative;
            &:after{
                content:"";
                height:2px;
                background:pink;
                position:absolute;
                left:0;
                right:0;
                bottom:-4px;
                opacity:0;
                transform-origin:left center;
                transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity:1;
            }
        }
     }
`
const SearchLogin = styled.div`
    display:flex;
    flex:1;
    justify-content: right;
    margin-right:25px;
    align-item:center;
    a{
      cursor:pointer;
      display:flex;
      align-items:center;
      padding-right: 50px;
      img{
          height:15px;
      }
      span{
          font-size:14px;
          font-weight:500;
          letter-spacing:1.2px;
          padding-left:4px;
          position:relative;
          &:after{
              content:"";
              height:2px;
              background:pink;
              position:absolute;
              left:0;
              right:0;
              bottom:-4px;
              opacity:0;
              transform-origin:left center;
              transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
              transform: scaleX(0);
          }
      }
      &:hover{
          span:after{
              transform: scaleX(1);
              opacity:1;
          }
      }
    }

`

const UserImg = styled.img`
    width:60px;
    height:60px;
    border-radius:50px;
    cursor:pointer;
`

const Hamburger = styled.div`
    
`
