import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import SzH from "images/OH15.jpg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { ReactComponent as HeartIcon } from "feather-icons/dist/icons/heart.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto  md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${props => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

export default ({ id = "szh",
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  imageSrc = SzH,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  showDecoratorBlob = false,
  textOnLeft = false,
  features = null,
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null
}) => {
  const defaultFeatures = [

  ];

  if (!features) features = defaultFeatures;

  return (
    <Container id={id}>
      <TwoColumn>
        <ImageColumn>
          <Image src={imageSrc} height={100} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          {showDecoratorBlob && <DecoratorBlob />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>2024. szept. 29. - 2024. okt. 12.</Subheading>
            <Heading>15 éves az Összhang</Heading>
            <Description>Két hétig ingyenes nyitott alkalmakkal és más érdekes programokkal készülünk nektek (2 esemény fizetős)!</Description>
            <Description>Tartsatok velünk Ti is ezen jeles alkalomból, szeretettel várunk minden kedves érdeklődőt!</Description>
            <Features>
              <Feature key="download">
                <PrimaryButton buttonRounded={buttonRounded} target="_blank" as="a" href={"https://www.facebook.com/events/1059589992432775"}>
                  {"Részletes program facebook oldalunkon"}
                </PrimaryButton>
              </Feature>

              <Feature key="download">
                <PrimaryButton buttonRounded={buttonRounded} target="_blank" as="a" href={"https://drive.google.com/file/d/1w-ta2XQchtBqbKw_fmHE-M7okOsDEHHU/view?usp=sharing"}>
                  {"Részletes program pdf formátumban"}
                </PrimaryButton>
              </Feature>

            </Features>

            {/* <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton> */}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
