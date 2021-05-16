import React, { useState } from 'react'
import styled from 'styled-components'
// import MenuIcon from '@material-ui/icons/Menu';

function header() {
    
    const burgerStatus = false;


    function bringout() {
    }



    return (
        <Containner>
            <a>
                <img src="/images/logo.png" height="17px"/>
            </a>
            <Menu>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p>
                <p><a href="#">SOLAR ROOF</a></p>
                <p><a href="#">SOLAR PANELS</a></p>
            </Menu>
            <RMenu>
                <a href="#">shop</a>
                <a href="#">tesla account</a>
                <img onClick={bringout} src="/images/burger.svg" height="30px"/>
            </RMenu>

            <BurgerNav show={burgerStatus} id="sidebar">
                <ColseButtonWrapper>
                <ColseButton src="/images/close.svg"  height="30px"></ColseButton>
                </ColseButtonWrapper>
                
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">used Inventory</a></li>
                <li><a href="#">trade-in</a></li>
                <li><a href="#">cybertruc</a></li>
                <li><a href="#">roadster</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
            </BurgerNav>

        </Containner>
    )
}

export default header



const Containner = styled.div`
    min-height: 50px;
    position: fixed;
    display: flex;
    align-items:center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;
`
const Menu = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    p{
        text-transformation:uppercase;
        padding:0 10px;
        flex-wrap: no-wrap;
        cursor: pointer;
    }
    @media (max-width: 1172px){
        p{
            display: none;
        }
    }
`

const RMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    float:right;
    a{
        text-transformation:uppercase;
        padding:0 10px;
        flex-wrap: no-wrap;
        cursor: pointer;
    }
    img{
        cursor: pointer;
    }
    @media (max-width: 1172px){
        a{
            display: none;
        }
    }
`
const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    padding:20px;
    width:300px;
    list-style:none;
    desplay:flex;
    flex-derection: column;
    text-align: start;
    transform:translateX(100%);
    li{
        padding: 20px 0;
        border-bottom:1px solid rgba(0, 0, 0, .1)
    }
`

const ColseButton = styled.img`
    cursor:pointer;
`
const ColseButtonWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`