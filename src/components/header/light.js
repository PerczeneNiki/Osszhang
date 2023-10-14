import React from "react";
import { genericHashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import {motion} from "framer-motion"; 
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js"; 

import logo from "../../images/logo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
whitespace-nowrap
inline-block
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300 text-primary-500
  pb-1 border-b-2 border-transparent hover:border-primary-900 hocus:text-primary-900
`;

export const MyHashLink = genericHashLink(NavLink);


export const PrimaryLink = tw(NavLink)`
  lg:mx-0 whitespace-nowrap
  px-8 py-3 rounded bg-primary-700 text-white
  hocus:bg-primary-900 hocus:text-gray-200 focus:shadow-outline
  border-b-0 
`;

export const LogoLink = styled(Link)`
  ${tw`flex items-center font-black text-primary-500 border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;
const LogoHashLink = genericHashLink(LogoLink);


export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
   z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

export const MobileNavLinks = motion(styled(Link)`
  ${tw` z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw(Link)`
  hidden flex-1 justify-between items-center
`;

export default ({ 
  roundedHeaderButton = true, 
  logoLink, 
  links, 
  contactLink,
  className, 
  collapseBreakpointClass = "lg" }) => {
  const defaultLinks = [
    <NavLinks key={1}>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoHashLink to="/">
      <img src={logo} alt="logo" />
      Összhang Egyesület
    </LogoHashLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;
  
  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
        {contactLink}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks onClick={toggleNavbar} initial={{ x: "150%", display: "none" }}  animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />} 
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`xl:hidden`,
    desktopNavLinks: tw`xl:flex`,
    mobileNavLinksContainer: tw`xl:hidden`
  }
};
