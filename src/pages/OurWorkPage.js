import React, {useEffect} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import  { MyHashLink, NavLinks} from "../components/header/light.js";
import Footer from "components/footers/Footer.js";
import ThreeActivities from "components/features/ThreeActivities.js";
import YearlyPrograms from "components/features/YearlyPrograms.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import NavBar from "components/header/NavBar.js";
import ContactUsForm from "components/features/ContactUs.js";
import SzH from "components/features/SzH.js";


const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-0 md:mt-0 text-sm inline-block items-center mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-0 md:py-0`}
`;


export default () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const navLinks = [
    <NavLinks key={1}>
      <MyHashLink smooth to="#activities">
        Tevékenységi köreink
      </MyHashLink>
      <MyHashLink smooth to="#yearlyprograms">
        Évkör
      </MyHashLink>
      <MyHashLink smooth to="#szh">
        Születés Hete 2024
      </MyHashLink>
      
    </NavLinks>
  ];

  return (
    <AnimationRevealPage>
      <NavBar id="ourworkpageNavbar" roundedHeaderButton={true} navLinks={navLinks}/>
      <ThreeActivities id="activities" heading="Tevékenységi köreink" linkText="Programok"/>
      <ThreeColumnContainer>
        <PrimaryButton buttonRounded={true} as="a" href={"https://www.facebook.com/OsszhangEgyesulet/events"}>
          {"Aktuális információk a facebook oldalunkon."}
        </PrimaryButton>
      </ThreeColumnContainer>

      <YearlyPrograms id="yearlyprograms"

        textOnLeft={false}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
<ContactUsForm />
<SzH id="szh"></SzH>
      <Footer />
    </AnimationRevealPage>
  );
};
