import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import  { NavLink, NavLinks } from "../components/header/light.js";
import Footer from "components/footers/OEFooter.js";
import Members from "components/features/OEMembers.js";
import Starts from "components/features/OEStarts.js";
import NavBar from "components/header/OENavBar.js";
import ContactUsForm from "components/features/OEContactUs.js";



import IlikeImage from "images/Ilike.png";
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

import SzuloFotel from "images/szulofotel.jpg";


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#founders">
        Alapítók
      </NavLink>
      <NavLink href="#members">
        Önkénteseink
      </NavLink>
      <NavLink href="#starts">
        Hogyan kezdődött?
      </NavLink>
      <NavLink href="#goals">
        Céljaink
      </NavLink>
    </NavLinks>
  ];
  return (
    <AnimationRevealPage>
      <NavBar id="aboutpageNavbar" roundedHeaderButton={true} navLinks={navLinks}/>
      <Members id="founders" heading="Alapítók" cards={[
        {
          imageSrc: IlikeImage,
          title: "Feithné Krajcsik Ilona",
          description: "perinatális szaktanácsadó, önkéntes szoptatást segítő, jógaoktató, ének-zene szakos tanár",
          about: "2000-ben léptem a jóga útjára. Több tanfolyamot végeztem, aztán 2009-ben a Himalájai jóga tradició 3 éves iskolája elvégzésével nemzetközi jógaoktatói oklevelet kaptam . Közben már elvégeztem a Birthligt kimama, baba-mama jógaoktatói tanfolyamait.  Ugyan ebben az évben végeztem az ELTE perinatális szaktanacsadó szakán. Két felnőtt gyermekem van. Két unokám. 2009-ben megalapítottuk az Összhang Közhasznú Egyesületet. Azóta vagyok az elnöke.",
        },
        {
          imageSrc: KatiImage,
          title: "Tolnay Katalin",
          description: "mentálhigiénés szakember, transzpeszonális terapeuta",
          about: "A lelki egészség helyreállításában segítem a hozzám fordulókat. Egyéni és csoportos folyamatokat kísérek. A perinatális témához anyaságom élménye vezetett. Tagja vagyok az Orosz Katalin klinikai pszichológus irányításával működő Születés Kísérleti Műhelynek. Az ő módszerén alapuló Születni - Újjászületni csoportokban dolgozva sok tapasztalatot és tudást szereztem a születés életre gyakorolt hatásáról. Ez az élmény motiválja a munkámat. ",
        },
        {
          imageSrc: AniImage,
          title: "Hasilló Annamária",
          description: "szülésznő, csecsemő és kisgyermeknevelő, IBCLC és SE laktációs szaktanácsadó, perinatális szaktanácsadó",
          about: "A hivatástudat, ami meghatározza életutamat. A legnagyobb elismerés számomra, az Anyák bizalma. Nekik köszönhetem, hogy 2011-ben az Év Bábája lettem, és Eger városának lakossága azzal jutalmazott, hogy 2012-ben az Év Emberének választott, majd 2016–ban, Eger Csillagának. 2012-ben Magyarország Köztársasági Elnökének Érdemérmének kitüntetését, az államfő a baba- és mamabarát szülés megteremtésében játszott aktív szerepem elismeréseként adta.",
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
        buttonRounded={false}
        primaryButtonText="Bővebben"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />

      <Starts
        subheading={<Subheading>Kezdetek</Subheading>}
        heading="A szülőfotel"
        buttonRounded={false}
        primaryButtonText="Bővebben"
        imageSrc={SzuloFotel}
        textOnLeft={false}
      />

      <Starts id="goals"
        subheading={<Subheading>Kezdetek</Subheading>}
        heading="Céljaink"
        buttonRounded={false}
        primaryButtonText="Bővebben"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
<ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
