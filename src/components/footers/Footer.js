import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import alapitoOkirat from "documents/AlapitoOkirat.pdf"
import ADATKEZELESI from "documents/ADATKEZELESI.pdf"
import emailjs from 'emailjs-com';
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";


import LogoImage from "images/logo.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as InstaIcon } from "images/insta-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const ThreeColumns = tw.div`columns-1 flex-wrap flex xl:flex-nowrap lg:columns-2 xl:columns-3 text-center justify-center -mt-12`;
const LeftColumn = tw.div`px-4 sm:px-0 mt-10 pt-4 sm:mr-4`;
const RightColumn = tw.div`px-4 sm:px-0 mt-12 sm:ml-4`;
const LinkListItem = tw.div`whitespace-nowrap mb-3 text-center inline-block mr-10`;
const LinkItem = tw.a`mb-4 sm:mt-0   items-center text-secondary-300 transition duration-300 hover:text-primary-400 `;
const RouterLink = styled(Link)`${tw`mt-4 sm:mt-0   items-center text-secondary-300 transition duration-300 hover:text-primary-400 `}}`;
const Row = tw.div`flex flex-col lg:flex-row md:inline-block justify-between items-center mt-12 mb-0 inline-block md:ml-20 `;

const Divider = tw.div`my-8 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-primary-500`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-primary-500 text-gray-100 hover:bg-primary-900 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

function sendEmail(e) {
  e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
  emailjs.sendForm('service_gi12d6g', 'template_jafwo3o', e.target, 'm-8xebMSUuo6oS2sD')
    .then((result) => {
      window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
    });
}

export default () => {
  /*let [htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await ((await fetch('contact.html')).text()));

  }
  useEffect(() => {
    fetchHtml();
  }, []);

  const sanitizedData = DOMPurify.sanitize(htmlFileString);
  console.log(sanitizedData);*/

  return (

    <Container>

      <Content>
        <ThreeColumns id="threeColumns">


          {/*<LinkListItem>
              <LinkItem onClick={()=>{
                setOpenedModal(3); 
                setImgModal(LogoImage);
                setLinkModal("https://szulesszuletes.hu/");
                setNameModal("Séta a szülés-születés minőségéért"); 
                setContentModal("Évente megrendezett esemény, melyen az Egyesület elnöke is részt szokott venni. \nA sétával arra hívják fel a szervezők a figyelmet, hogy milyen messzire nyúló jelentősége lehet annak, hogy a szülés /születés milyen élmény az édesanya, a baba és a család számára.")}}>SzüléSzületés séta</LinkItem>
              </LinkListItem>*/}
          <LeftColumn id="mapColumn" class="basis-1/2">
            <iframe title="osszhangLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.6931652133547!2d20.370875654341976!3d47.902085323399994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d95e5c64b8d%3A0x1149b456b140b2d8!2zw5Zzc3poYW5nIEVneWVzw7xsZXQ!5e0!3m2!1shu!2shu!4v1693346325093!5m2!1shu!2shu" width="450" height="515" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </LeftColumn>
          <RightColumn id="newsletterColumn" class="basis-1/4">
          <iframe title="newsletter" src="contact.html" width="450" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </RightColumn>
        </ThreeColumns>
        <Row>
          <LinkListItem>
            <LinkItem href={ADATKEZELESI} target="_blank">Adatkezelési tájékoztató</LinkItem>
          </LinkListItem>
          <LinkListItem>
            <LinkItem href={alapitoOkirat} target="_blank">Alapító okirat</LinkItem>
          </LinkListItem>
          <LinkListItem>
            <RouterLink to="/reports">Beszámolók, támogatások</RouterLink>
          </LinkListItem>
          <LinkListItem>
            <LinkItem href="https://www.facebook.com/OsszhangEgyesulet/events">Programjaink, szolgáltatásaink</LinkItem>
          </LinkListItem>
          <LinkListItem>
            <RouterLink to="/writings">Várakozásról, szülésről, születésről</RouterLink>
          </LinkListItem>
        </Row>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Összhang Egyesület</LogoText>
          </LogoContainer>
          <CopywrightNotice>&copy; 2009 Összhang Közhasznú Egyesület. Minden jog fenntartva.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/OsszhangEgyesulet">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/osszhang_egyesulet/">
              <InstaIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/@OsszhangEgyesulet">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>

        </ThreeColRow>
      </Content>

    </Container>
  );
};
