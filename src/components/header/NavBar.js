import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "./light.js";


const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw` hover:border-primary-900 `}
  }
  ${NavToggle}.closed { 
    ${tw`text-primary-500 hover:text-primary-500`}
  }
`;


const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover min-h-10`}
`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;

export default ({ id="navbar", navLinks = [
  <NavLinks key={1}>
    <NavLink href="/#aboutus">
      Rólunk
    </NavLink>
    <NavLink href="/#mainActivities">
      Tevékenység
    </NavLink>   
    <NavLink href="#perinat">
      Perinatális segítők
    </NavLink> 
    <NavLink href="#onepercent">
      Támogatás
    </NavLink>
    <NavLink href="#faq">
      GYIK
    </NavLink>
  </NavLinks>
],
contactLink=[
  <NavLinks key={2}>
    <PrimaryLink href="#contactUs">
      Írj nekünk!
    </PrimaryLink>
  </NavLinks>] }) => {
  
  return (
    <Container id={id}>
      <HeroContainer>
        <StyledHeader links={navLinks} contactLink={contactLink}/>
      </HeroContainer>
      </Container>
      
  );
};
