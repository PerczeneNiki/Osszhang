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

import IlikeImage from "images/Ilike.png";
import IlikeBemutatkozas from 'texts/IlikeBemutatkozas.txt';

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
  const [names, setNames] = useState("");
  const [imageSrcs, setImageSrcs] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [abouts, setAbouts] = useState("");
  const [foundersCards, setFoundersCards] = useState("");
  useEffect(() => {
    async function main() {
    let importedData = await fetch(IlikeBemutatkozas).then((res) => res.text());
    importedData=importedData.split("|")
    
    let temp = importedData.at(0).split(":").at(1).split(";");
    setNames(temp.map((item) => item.split("=").at(1)));
    temp = importedData.at(1).split(":").at(1).split(";");
    setImageSrcs(temp.map((item) => item.split("=").at(1)));
    temp = importedData.at(2).split(":").at(1).split(";");
    setDescriptions(temp.map((item) => item.split("=").at(1)));
    temp = importedData.at(3).split(":").at(1).split(";");
    setAbouts(temp.map((item) => item.split("=").at(1)));


  }
  main();
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
  {
    imageSrc: IlikeImage,
    title: names.at(0),
    description: descriptions.at(0),
    about: abouts.at(0),
  },
  {
    imageSrc: KatiImage,
    title: names.at(1),
    description: descriptions.at(1),
    about: abouts.at(1),
  },
  {
    imageSrc: AniImage,
    title: names.at(2),
    description: descriptions.at(2),
    about: abouts.at(2),
  }]} />
      <Members id="members" heading="Önkénteseink" cards={[
        {
          imageSrc: IlikeImage,
          description: "Elnök",
          title: "Feithné Krajcsik Ilona",
          about: "2000-ben léptem a jóga útjára. Több tanfolyamot végeztem, aztán 2009-ben a Himalájai jóga tradició 3 éves iskolája elvégzésével nemzetközi jógaoktatói oklevelet kaptam . Közben már elvégeztem a Birthligt kimama, baba-mama jógaoktatói tanfolyamait.  Ugyan ebben az évben végeztem az ELTE perinatális szaktanacsadó szakán. Két felnőtt gyermekem van. Két unokám. 2009-ben megalapítottuk az Összhang Közhasznú Egyesületet. Azóta vagyok az elnöke.",

        },
        {
          imageSrc: KatiImage,
          description: "???",
          title: "Tolnay Katalin",
          about: "A lelki egészség helyreállításában segítem a hozzám fordulókat. Egyéni és csoportos folyamatokat kísérek. A perinatális témához anyaságom élménye vezetett. Tagja vagyok az Orosz Katalin klinikai pszichológus irányításával működő Születés Kísérleti Műhelynek. Az ő módszerén alapuló Születni - Újjászületni csoportokban dolgozva sok tapasztalatot és tudást szereztem a születés életre gyakorolt hatásáról. Ez az élmény motiválja a munkámat. ",
        },
        {
          imageSrc: JuditImage,
          description: "???",
          title: "Bereczné Dobos Judit",
          about: "gyógypedagógus, logopédus tanár terapeuta, SZPT játékmester",
        },
        {
          imageSrc: ZsofiImage,
          description: "???",
          title: "Holló Zsófia",
          about: "Bemutatkozás",
        },
        {
          imageSrc: NikiImage,
          description: "???",
          title: "Perczéné Menyhárt Nikolett",
          about: "Bemutatkozás",
        },
        {
          imageSrc: PattiImage,
          description: "???",
          title: "Fehérné Nagy Patricia",
          about: "Bemutatkozás",
        },
        {
          imageSrc: LucaImage,
          description: "???",
          title: "Mezei Luca",
          about: "Bemutatkozás",
        },
        {
          imageSrc: RekaImage,
          description: "???",
          title: "Oláh-Kristóf Réka",
          about: "Bemutatkozás",
        },
        {
          imageSrc: IldiImage,
          description: "???",
          title: "Tóth Ildi",
          about: "Bemutatkozás",
        },
        {
          imageSrc: BeaImage,
          description: "???",
          title: "Bakondi Beatrix",
          about: "Bemutatkozás",
        },
        {
          imageSrc: VIldiImage,
          description: "???",
          title: "Szakácsné Veszprémi Ildi",
          about: "Bemutatkozás",
        },
        {
          imageSrc: SzandraImage,
          description: "???",
          title: "Veréb Szandra",
          about: "Bemutatkozás",
        },
        {
          imageSrc: TeamImage,
          description: "???",
          title: "Alagyi-Kása Fanni",
          about: "Bemutatkozás",
        },
        {
          imageSrc: TeamImage,
          description: "???",
          title: "Héjja-Nagy Katalin",
          about: "Bemutatkozás",
        },
        {
          imageSrc: TeamImage,
          description: "???",
          title: "Szilágyi Katalin",
          about: "Bemutatkozás",
        },
        

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
