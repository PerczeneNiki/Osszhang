import React from "react";
import { genericHashLink } from 'react-router-hash-link';
import tw from "twin.macro";
import styled from "styled-components";
import Header, { MyHashLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "./light.js";


const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${MyHashLink}, ${LogoLink} {
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

const MyPrimaryHashLink = genericHashLink(PrimaryLink);


const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;

export default ({ id="navbar", navLinks = [
  <NavLinks key={1}>
    <MyHashLink smooth  to="/#aboutus">
      Rólunk
    </MyHashLink>
    <MyHashLink smooth  to="/#mainActivities">
      Tevékenység
    </MyHashLink>   
    <MyHashLink smooth  to="#perinat">
      Perinatális segítők
    </MyHashLink> 
    <MyHashLink smooth to="#onepercent" >
      Támogatás
    </MyHashLink>
    <MyHashLink smooth to="#faq" >
      GYIK
    </MyHashLink>
  </NavLinks>
],
contactLink=[
  <NavLinks key={2}>
    <MyPrimaryHashLink smooth to="#contactUs">
      Írj nekünk!
    </MyPrimaryHashLink>
  </NavLinks>] }) => {
  
  return (
    <Container id={id}>
      <HeroContainer>
        <StyledHeader links={navLinks} contactLink={contactLink}/>
      </HeroContainer>
      </Container>
      
  );
};
