import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { useEffect } from "react";
import tw from "twin.macro";
import  { MyHashLink, NavLinks  } from "../components/header/light.js";
import Footer from "components/footers/Footer.js";
import Members from "components/features/Members.js";
import Starts from "components/features/Starts.js";
import NavBar from "components/header/NavBar.js";
import ContactUsForm from "components/features/ContactUs.js";
import foundersData from "data/founders.json";
import membersData from "data/members.json";

import IlikeImage from "images/Ilike.png";
//import IlikeBemutatkozas from 'texts/IlikeBemutatkozas.txt';

import AniImage from "images/Ani.png";
import KatiImage from "images/Kati.png";
import BeaImage from "images/Bea.png";
import IldiImage from "images/Ildi.png";
import JuditImage from "images/Judit.png";
import LucaImage from "images/Luca.png";
import NikiImage from "images/Niki.png";
import PattiImage from "images/Patti.png";
import RekaImage from "images/Reka.png";
import SzandraImage from "images/Szandra.png";
import VIldiImage from "images/VIldi.png";
import ZsofiImage from "images/Zsofi.png";
import TeamImage from "images/team-illustration.svg";

import szuloFotel from "images/szulofotel.jpg";
import katanili from "images/katanili.png";
import goalsImage from "images/goals.jpg";


import { ReactComponent as HeartIcon } from "feather-icons/dist/icons/heart.svg";




const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  // const [names, setNames] = useState("");
  // const [imageSrcs, setImageSrcs] = useState("");
  // const [descriptions, setDescriptions] = useState("");
  // const [abouts, setAbouts] = useState("");
  // const [foundersCards, setFoundersCards] = useState("");

  const foundersItems = foundersData["items"];
  const membersItems = membersData["items"];
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])

  const navLinks = [
    <NavLinks key={1}>
      <MyHashLink smooth to="#founders">
        Alapítók
      </MyHashLink>
      <MyHashLink smooth to="#members">
        Önkénteseink
      </MyHashLink>
      <MyHashLink smooth to="#starts">
        Hogyan kezdődött?
      </MyHashLink>
      <MyHashLink smooth to="#goals">
        Céljaink
      </MyHashLink>
    </NavLinks>
    
  ];
  return (    
    <AnimationRevealPage>
      <NavBar id="aboutpageNavbar" roundedHeaderButton={true} navLinks={navLinks}/>
      <Members id="founders" heading="Alapítók" cards={[
        foundersItems.map((item) => (
          {
            imageSrc: item["src"],
            title: item["name"],
            descriptions: item["description"],
            about: item["about"]
          }
        ))
      ]}/>
      
      <Members id="members" heading="Önkénteseink" cards={[
         membersItems.map((item) => (
          {
            imageSrc: item["src"],
            title: item["name"],
            descriptions: item["description"],
            about: item["about"]
          }
        ))

      ]
      } />
      <Starts id="starts"
        subheading={<Subheading>Kezdetek</Subheading>}
        heading="Az alapítás"
        description="2009-ben azért jött létre az Összefogás a Szülés-Születés-Szoptatás Humanizációjáért Közhasznú Egyesület, hogy tevékenységével felhívja az édesanyák figyelmét a természetes vajúdási - szülési folyamatra; valamint az anyatejes táplálás és a szoptatás fontosságára és mindezek megvalósításához gyakorlati segítséget nyújtson."
        buttonRounded={false}
        primaryButtonText="Bővebben"
        imageSrc={katanili}
        features = {[
          {
            Icon: HeartIcon,
            title: "Mottó",
            description: "„…napjaink erőszakos világának békéssé formálásához legelőször azt kell megváltoztatnunk, ahogy gyermekeinkkel bánunk, mégpedig életük legelső pillanatától kezdve.” (Thomas Verny)",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
          },
          {
            Icon: HeartIcon,
            title: "Affordable",
            description: "valami",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />

      <Starts
        subheading={<Subheading>Kezdetek</Subheading>}
        heading="A szülőfotel"
        buttonRounded={false}
        primaryButtonText="Bővebben"
        imageSrc={szuloFotel}
        textOnLeft={false}
        description="A fotel azért készült, hogy az édesanyáknak Egerben is legyen lehetőségük a most általános fekvő testhelyzettől eltérő szülési pozíciót választani. Az anyák nagyon szerettek, szeretnek a babzsákfotelban ülni. Felveszi a testük alakját, gyengéden támasztja meg, körbeöleli. Innen indultak el Ilike alkotó gondolatai."
        features = {[
          {
            Icon: HeartIcon,
            title: "Az ötlet",
            description: "A fotel megálmodója Feithné Krajcsik Ilona. A megvalósulást az Összhang KHE finanszírozta.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
          },
          {
            Icon: HeartIcon,
            title: "A megvalósítás",
            description: "A fotelt a valóságban Csuka Emőke (Amőbafotel) alkotta meg. Szirtesi Attila alakította ki a rozsdamentes acélból a fotel alátámasztását",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
/>

      <Starts id="goals"
        subheading={<Subheading>Kezdetek</Subheading>}
        heading="Céljaink"
        description="Célunk még, hogy támogassuk a családokat intellektuálisan és érzelmileg a megváltozott élethelyzethez való alkalmazkodásban, támogatást nyújtsunk számukra a mindennapokban.
        Tevékenységi körünk változik, bővül a gyerekek növekedésével, igényeivel, szükségleteivel."
        buttonRounded={false}
        primaryButtonText="Bővebben"
        imageSrc={goalsImage}
        features = {[
          {
            Icon: HeartIcon,
            title: "Professionalism",
            description: "Célunk, hogy tevékenységünkkel hozzájáruljunk az optimális életkezdet általános gyakorlattá tételéhez szükséges szemléletváltáshoz.",
            iconContainerCss: tw`bg-teal-300 text-teal-800`
          },
          {
            Icon: HeartIcon,
            title: "Affordable",
            description: "Célunk továbbá, hogy támogassuk a családokat abban, hogy „elég” boldog gyermekeket neveljenek, s ehhez nekik is csupán „elég” boldognak kell lenniük.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
        
      />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
