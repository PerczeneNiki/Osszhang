import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import NavBar from "components/header/OENavBar.js";
import HeaderImageAndText from "components/header/OEHeaderImageAndText.js";
import AboutUs from "components/features/OEAboutUs.js";
import Activities from "components/features/OEActivities.js";
import ContactUsForm from "components/features/OEContactUs.js";
import FAQ from "components/features/OEFAQ.js";
import Footer from "components/footers/OEFooter.js";
import OnePercent from "components/features/OEOnePercent.js";
import PerinatFuzet from "components/features/OEPerinatFuzet";
import onepercent from "images/egyszazalek.jpg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  

  return (
    <AnimationRevealPage>
      <NavBar roundedHeaderButton={true} />
      <HeaderImageAndText heading={<><HighlightedText>Összhangban </HighlightedText> a várandós és kisgyermekes édesanyák, családok szolgálatában.</> }/>
      <AboutUs subheading={<Subheading>Rólunk</Subheading>} />
      <Activities subheading={<Subheading>Tevékenységeink</Subheading>} heading={<> Szeretettel várunk. </>} />
      <PerinatFuzet></PerinatFuzet>
      <OnePercent subheading={<Subheading>egyszázalék</Subheading>} 
        heading={<> Hálásan köszönjük, ha támogatsz <HighlightedText>1%-oddal.</HighlightedText></>}
        imageSrc={onepercent}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Közhasznú",
            description: "Egyesületünknek nagy segítség, ha egy százalékoddal támogatsz Minket.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Lorem ipsum",
            description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]} />
      <FAQ subheading={<Subheading>GYIK</Subheading>}
        heading={<>Van néhány <HighlightedText>kérdésed?</HighlightedText></>}
        description={<>Reméljük megtalálod a választ, ha mégsem, bátran írj nekünk!</>}
        faqs={[
          {
            question: "Hol található helyileg az Összhang Egyesület?",
            answer:  "Az Egyesület székhelye Egerben, a Barkóczy utca 11. A. épület II/4. (22-es kapucsengő) alatt található."
          },
          {
            question: "Minden program ugyanott kerül megrendezésre?",
            answer: "Nem! Legtöbb programunkat az Egyesület székhelyén tartjuk, de szoktak lenni eseményeink külső helyszíneken, pl az Érsekkertben, könyvtárakban és más településeken."
          },
          {
            question: "Mennyibe kerülnek a programok?",
            answer: "Egyesületi tagjainknak programjaink nagy része ingyenes, workshopjaink általában önköltségesek, erről mindig facebook eseményeink leírásában találhattok információt."
          },
          {
            question: "Hogyan lehetek Egyesületi tag?",
            answer: "Egyesületi tagsági díjat minden évben adott tárgyévre lehet befizetni, ennek díja jelenleg 5000 Ft."
          },
          {
            question: "Kell jelentkeznem az eseményekre, ha részt szeretnék venni?",
            answer: "Eseményeink egy részére szükséges előzetes jelentkezés, ezt mindig a facebook esemény leírásában jelezzük."
          },
          {
            question: "Részt vehetek az eseményeken kisbabámmal, kisgyermekemmel?",
            answer: "Igen, legtöbb programunkon részt vehetsz gyermekeddel, amennyiben egy esemény csak felnőtteknek szól, azt a leírásában jelezzük facebookon."
          }
        ]} />
      <ContactUsForm/>
      <Footer />
      
    </AnimationRevealPage>
    
  );
      }
