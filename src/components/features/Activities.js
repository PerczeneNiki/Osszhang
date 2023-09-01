import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/pregnant.png";
import CustomizeIconImage from "images/newborn.png";
import ReliableIconImage from "images/problem.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-0 md:py-0`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-16 h-16`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;


const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block items-center mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ id="mainActivities",
  cards = null, 
  heading = "Amazing Features", 
  subheading = "Features", 
  description = "Várandósságra készülve, babát várva és szülés után.",
  primaryButtonText = "Tudj meg többet",
  primaryButtonUrl = "/ourWork",
  buttonRounded = true,
}) => {

  const defaultCards = [
    { imageSrc: SupportIconImage, title: "Támogatás várandósság előtt és alatt...", description: "... felkészítőinken, workshopjainkon és jógaóráinkon." },
    { imageSrc: CustomizeIconImage, title: "Közösség kisbabával, kisgyermekkel...", description: "... klubjainkon, előadásainkon és mondókázó foglalkozásainkon." },
    { imageSrc: ReliableIconImage, title: "Segítség szükség esetén...", description: "... egyéni konzultációkon és segítő szolgáltatásaink által." },
   
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container id={id}>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
        
      </ThreeColumnContainer>
      <ThreeColumnContainer>
      <PrimaryButton buttonRounded={buttonRounded} >
      <Link to="/ourWork">{primaryButtonText}</Link>
            </PrimaryButton>
            </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
