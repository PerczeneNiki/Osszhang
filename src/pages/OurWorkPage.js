import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import  { NavLink, NavLinks} from "../components/header/light.js";
import Footer from "components/footers/Footer.js";
import Members from "components/features/Members.js";
import YearlyPrograms from "components/features/YearlyPrograms.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import NavBar from "components/header/NavBar.js";
import ContactUsForm from "components/features/ContactUs.js";


import waitImage from "images/waitfor.jpg";
import withbaby from "images/withbaby.jpg";
import perinatalsession from "images/perinatalsession.jpg";

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-0 md:mt-0 text-sm inline-block items-center mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-0 md:py-0`}
`;


export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#activities">
        Tevékenységi köreink
      </NavLink>
      <NavLink href="#yearlyprograms">
        Évkör
      </NavLink>
      <NavLink href="#yearlyprograms">
        Éves programunk
      </NavLink>
    </NavLinks>
  ];

  return (
    <AnimationRevealPage>
      <NavBar id="ourworkpageNavbar" roundedHeaderButton={true} navLinks={navLinks}/>
      <Members id="activities" heading="Tevékenységi köreink" linkText="Programok" cards={[
        {
          imageSrc: waitImage,
          title: "Várandósságra, szülésre készülve",
          description: "Már a várandósságra készülve is csatlakozhatsz foglalkozásainkra.",
          about: "Beszélgetőkörök, női jóga, kismama jóga, Születés Hete",
        },
        {
          imageSrc: withbaby,
          title: "Kisbabával, kisgyermekkel",
          description: "Sok programunkon találkozhatsz hasonló korú gyerekekkel és édesanyjukkal.",
          about: "Hangicsáló, Babamasszázs, Összhang klub, Hordozós beszélgetőkör, Pelenkatapogató, Workshopok",
        },
        {
          imageSrc: perinatalsession,
          title: "A teljes perinatális időszakban és azon túl",
          description: "Ha segítségre van szükséged, vagy csak beszélnél valakivel.",
          about: "Pszichológus, perinatális szaktanácsadó, gyermekágyas segítők, önkéntes szoptatási segítőkállnak rendelkezésedre",
        },]} />
      <ThreeColumnContainer>
        <PrimaryButton buttonRounded={true} as="a" href={"https://www.facebook.com/OsszhangEgyesulet"}>
          {"Aktuális információk a facebook oldalunkon."}
        </PrimaryButton>
      </ThreeColumnContainer>

      <YearlyPrograms id="yearlyprograms"

        textOnLeft={false}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
<ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
