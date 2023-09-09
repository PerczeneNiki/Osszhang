import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import Supporters from "components/infopages/Supporters.js";
import InfoModal from "components/infopages/InfoModal.js";
import alapitoOkirat from "documents/AlapitoOkirat.pdf"
import ADATKEZELESI from "documents/ADATKEZELESI.pdf"
import emailjs from 'emailjs-com';

import LogoImage from "images/logo.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as InstaIcon } from "images/insta-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const StyledModal = styled(ReactModalAdapter)`
&.mainHeroModal__overlay {
  ${tw`fixed inset-x-0 top-0 z-50 ` }
}
&.mainHeroModal__content {
  ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-lg inset-0 flex items-center rounded-xl bg-gray-300 border-2 border-primary-500 outline-none`}
}
.content {
  ${tw`w-full lg:p-16`}
}
`;

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`mb-6 uppercase font-bold text-primary-500`;

const LinkList = tw.ul`mt-6 text-sm font-medium inline-block`;
const LinkListItem = tw.li`mt-3`;
const LinkItem = styled.a`
${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hover:text-primary-400 `}
}
`;
const RouterLink = styled(Link)`
${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hover:text-primary-400 `}
}
`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 text-sm font-medium text-gray-600`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-primary-500 text-gray-100 hover:bg-primary-900 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

function sendEmail(e){
  e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

  emailjs.sendForm('service_gi12d6g', 'template_jafwo3o', e.target, 'm-8xebMSUuo6oS2sD')
    .then((result) => {
      console.log("sendemail");
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
        console.log(error.text);
    });
}

export default () => {
  const [openedModal, setOpenedModal] = useState(0);
  const [contentModal, setContentModal] = useState("");
  const [itemsModal, setItemsModal] = useState("");
  const [nameModal, setNameModal] = useState("");
  const [imgModal, setImgModal] = useState("");
  const [linkModal, setLinkModal] = useState("");

  return (
    
    <Container>
      <Content>
        <SixColumns>
        <Column>
        <iframe title="osszhangLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.6931652133547!2d20.370875654341976!3d47.902085323399994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d95e5c64b8d%3A0x1149b456b140b2d8!2zw5Zzc3poYW5nIEVneWVzw7xsZXQ!5e0!3m2!1shu!2shu!4v1693346325093!5m2!1shu!2shu" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Column>
          <Column>
            <LinkList>
              <LinkListItem>
                <LinkItem href = {ADATKEZELESI} target = "_blank">Adatvédelmi tájékoztató</LinkItem>
              </LinkListItem>
              <LinkListItem>
                <LinkItem href = {alapitoOkirat} target = "_blank">Alapító okirat</LinkItem>
              </LinkListItem>
              <LinkListItem>
                <RouterLink to="/reports">Beszámolók, támogatások</RouterLink>
              </LinkListItem>
              <LinkListItem>
                <LinkItem onClick={()=>{
                  setOpenedModal(1); 
                  setNameModal("Támogatóink"); 
                  setContentModal("Hálásan köszönjük támogatóinknak, hogy segítik Egyesületünk fennmaradását és munkánkat.");
                  setItemsModal([
                    {
                      profileImageSrc:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                      heading: "XY rendszeres támogatás",
                      quote:
                        "Van egyáltalán ilyenünk?",
                      customerName: "Charlotte Hale",
                      customerTitle: "Delos Inc."
                    },
                    {
                      profileImageSrc:
                        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
                      heading: "Másik támogató",
                      quote:
                        "Ő is támogat, vagynem...",
                      customerName: "Adam Cuppy",
                      customerTitle: "Founder, EventsNYC"
                    }
                  ])}}>Támogatóink</LinkItem>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <LinkList>
              <LinkListItem>
                <LinkItem onClick={()=>{
                  setOpenedModal(1); 
                  setNameModal("Társszervezetek"); 
                  setContentModal("Szervezetek akikkel kapcsolódunk.");
                  setItemsModal([
                    {
                      profileImageSrc:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                      heading: "valami",
                      quote:
                        "társszervezet1",
                      customerName: "Charlotte Hale",
                      customerTitle: "Delos Inc."
                    },
                    {
                      profileImageSrc:
                        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
                      heading: "valami más",
                      quote:
                        "társzervezet2",
                      customerName: "Adam Cuppy",
                      customerTitle: "Founder, EventsNYC"
                    }
                  ])}}>Társszervezetek</LinkItem>
              </LinkListItem>
              <LinkListItem>
                <LinkItem href="https://www.facebook.com/OsszhangEgyesulet/events">Programjaink, szolgáltatásaink</LinkItem>
              </LinkListItem>
              <LinkListItem>
                <LinkItem onClick={()=>{
                  setOpenedModal(3); 
                  setImgModal(LogoImage);
                  setLinkModal("https://szulesszuletes.hu/");
                  setNameModal("Séta a szülés-születés minőségéért"); 
                  setContentModal("Évente megrendezett esemény, melyen az Egyesület elnöke is részt szokott venni. \nA sétával arra hívják fel a szervezők a figyelmet, hogy milyen messzire nyúló jelentősége lehet annak, hogy a szülés /születés milyen élmény az édesanya, a baba és a család számára.")}}>SzüléSzületés séta</LinkItem>
              </LinkListItem>
              <LinkListItem>
                <RouterLink to="/writings">Várakozásról, szülésről, születésről</RouterLink>
              </LinkListItem>
            </LinkList>
          </Column>
          
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Iratkozz fel programértesítő leveleinkre</ColumnHeading>
              <SubscribeText>
                Minden hónap végén elküldjük Neked a következő hónap eseményeit és egyéb érdekes és hasznos információkat
              </SubscribeText>
              <SubscribeForm method="get" action="#" onSubmit={sendEmail}>
                <Input type="email" name="from_email" placeholder="Your Email Address" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
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
      <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={openedModal === 1}
          shouldCloseOnOverlayClick={true}
          onRequestClose={()=>setOpenedModal(0)}
        >          
          <div className="content">
          <Supporters id="supporters" heading={nameModal} items={itemsModal} description={contentModal}
  />
          </div>
        </StyledModal>
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={openedModal === 3}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() =>setOpenedModal(0)} 
        >          
          <div className="content">
          <InfoModal id="info" heading= {nameModal} image={imgModal} description={contentModal} link={linkModal}/>
          </div>
        </StyledModal>
        
      
    </Container>
  );
  };
