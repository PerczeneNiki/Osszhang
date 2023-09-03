import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;


export default ({id="aboutus",
  subheading = "Our Expertise",
  heading = (
    <>
      Üdvözlünk az <span tw="text-primary-500">Összhang Egyesület</span> weboldalán!
    </>
  ),
  description = "Célunk, hogy elősegítsük és támogassuk a szülés-születés-szoptatás humanizációját, valamint az anya és gyermeke közötti korai kötődés kialakulását. Szervezetünk szakmai háttérrel rendelkező, civil szervezet, amely számos programmal és tevékenységgel támogatja az édesanyákat és családokat az optimális életkezdet megvalósításában. Csatlakozz hozzánk, és légy részese egy összetartó közösségnek, amely segít a gyermekvállalás örömeiben és kihívásaiban!",
  primaryButtonText = "Tudj meg többet",
  primaryButtonUrl = "/#aboutUs",
  buttonRounded = true,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container id={id}>
      <TwoColumn>
        <RightColumn>
            <StyledResponsiveVideoEmbed
              url="//youtube.com/embed/kAtwFAvRR80?controls=0"
              background="transparent"
            />
        </RightColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PrimaryButton buttonRounded={buttonRounded}>
              <Link to="/aboutUs">{primaryButtonText}</Link>
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
