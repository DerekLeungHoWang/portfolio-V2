import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import RightNav from './RightNav'
const Nav = styled.nav`
width:100vw;
height:60px;
 

  padding:0 20px; 
display: flex;
justify-content: space-between;

.logo{
    width:100%;
    padding:30px 50px;
    font-weight:600;
    font-family:Helvetica ;
    color:#eb7b7b;
}



`
const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                Nav Bar
            </div>
            <Burger />

        </Nav>
    )
}

export default Navbar