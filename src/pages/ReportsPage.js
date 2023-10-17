import React, {useEffect} from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import NavBar from "components/header/NavBar.js";
import  { MyHashLink, NavLinks } from "../components/header/light.js";

import Footer from "components/footers/Footer.js";

import Beszamolo11 from "documents/Beszamolo2011.pdf";
import Beszamolo12 from "documents/Beszamolo2012.pdf";
import Beszamolo13 from "documents/Beszamolo2013.pdf";
import Beszamolo16 from "documents/Beszamolo2016.pdf";
import Beszamolo17 from "documents/Beszamolo2017.pdf";
import Beszamolo22_1 from "documents/Beszamolo2022_1.pdf";
import Beszamolo22_2 from "documents/Beszamolo2022_2.pdf";
import Beszamolo22Kieg from "documents/Kiegeszito2022.pdf";
import Beszamolo22Szoveg from "documents/Szoveges2022.pdf";
import AdozoKozlemeny20 from "documents/AdozoKozlemeny2020.pdf";

import palyazat1 from "images/tamogatasok/NEA.jpg";
import palyazat2 from "images/tamogatasok/civilalap.jpg";


const HeadingRow = tw.div`flex`;
const Heading = tw.h5`mt-6 mb-6 uppercase font-bold text-primary-500`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

const Link = styled.a`
${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hover:text-primary-400 `}
}
`;

const SupportContainer = tw.img`mb-4 border-solid border-teal-500 border-2`;

export default () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navLinks = [
    <NavLinks key={1}>
      <MyHashLink smooth to="#yearlyreports">
      Éves beszámolók
      </MyHashLink>
      <MyHashLink smooth to="#supports">
        Támogatások
      </MyHashLink>
      </NavLinks>
  ];
  
  return (    
    <AnimationRevealPage>
      <NavBar navLinks={navLinks} contactLink={null}/>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow id="yearlyreports">
            <Heading>Éves beszámolók</Heading>
          </HeadingRow>
          <Text>
          
            <p>
            <Link href={Beszamolo22_1} target = "_blank">A 2022. évi Közhasznúsági éves beszámoló 1. része</Link>
            </p>
            <p>
            <Link href={Beszamolo22_2} target = "_blank">A 2022. évi Közhasznúsági éves beszámoló 2. része</Link>
            </p>            
            <p>
            <Link href={Beszamolo22Kieg} target = "_blank">A 2022 évi Közhasznúsági éves beszámoló kiegészítés melléklet</Link>
            </p>
            <p>
            <Link href={Beszamolo22Szoveg} target = "_blank">A 2022 évi Közhasznúsági éves szöveges beszámoló</Link>
            </p>
            <p>
            <Link href={AdozoKozlemeny20} target = "_blank">Közlemény az adózó rendelkezése szerint a kedvezményezett részére átutalt összeg felhasználásáról 2020</Link>
            </p>
            <p>
            <Link href={Beszamolo17} target = "_blank">A 2017. évi Közhasznúsági éves beszámoló</Link>
            </p>
            <p>
            <Link href={Beszamolo16} target = "_blank">A 2016. évi Közhasznúsági éves beszámoló</Link>
            </p>
            <p>
            <Link href={Beszamolo13} target = "_blank">A 2013. évi Közhasznúsági éves beszámoló</Link>
            </p>
            <p>
            <Link href={Beszamolo12} target = "_blank">A 2012. évi Közhasznúsági éves beszámoló</Link>
            </p>
            <p>
            <Link href={Beszamolo11} target = "_blank">A 2011. évi Közhasznúsági éves beszámoló</Link>
            </p>

                      </Text>
                      <HeadingRow>
            <Heading id="supports">Támogatások</Heading>
          </HeadingRow>
                              <SupportContainer src={palyazat1} alt="NEA" width={400} />
                      <SupportContainer src={palyazat2} alt="civilalap" width={400} />
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
