import React, { useState, useEffect } from "react";

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, 
    NavLinks, NavItem, NavBtnLink, NavItemBtn
} from "./Navbar.elements";

import Logo from "../../assets/logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {Button} from  '../../globalStyles'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false)
      }
      else{
          setButton(true)
      }
  }

  useEffect(() =>{
      showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <img src={Logo} height={70} width={70} />
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
           
          </NavbarContainer>
          <NavMenu onClick={handleClick} click = {click}>
                <NavItem>
                    <NavLinks to = '/'>
                        Home
                    </NavLinks>
                </NavItem>
          
                <NavItem>
                    <NavLinks to = '/services'>
                        Services
                    </NavLinks>
                </NavItem>
            
                <NavItem>
                    <NavLinks to = '/products'>
                        Products
                    </NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to = '/live_quotes'>
                        Live Quotes
                    </NavLinks>
                </NavItem>
            
                <NavItem>
                    <NavLinks to = '/about_us'>
                        About Us
                    </NavLinks>
                    
                   
                </NavItem>
                <NavItemBtn>
                        {button ? (
                            <NavBtnLink to = '/sign_up'>
                                <Button primary>
                                    Sign Up
                                </Button>
                            </NavBtnLink>
                        ): (
                            <NavBtnLink to='/sign_up'>
                                <Button  fontBig primary>
                                Sign Up
                                </Button>
                            </NavBtnLink>
                        )}
                         </NavItemBtn>
                  
            </NavMenu>
           
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
