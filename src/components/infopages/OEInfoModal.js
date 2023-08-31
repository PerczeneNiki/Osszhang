import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { SectionHeading as HeadingTitle } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import IlikeImage from "images/Kati.png";


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-6 lg:py-6`;

const Title = tw(
  HeadingTitle
)`text-primary-500`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-md`;


const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

const ImageContainer = styled.a`
${tw`text-center`}
img {
  ${tw`w-48 h-48`}
}`;

const Link = styled.button`
${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hover:text-primary-400 `}
}
`;

export default ({
  image = {IlikeImage},
  heading = "Név",
  description = "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
  imageCss = null,
  link = null
}) => {
  return (    
    <Container>
      <Content>
        <HeadingInfoContainer>
        <ImageContainer ><img src={image} alt="" css={imageCss} /></ImageContainer>        
          <Title>{heading}</Title>
          <HeadingDescription>{description}</HeadingDescription>
          <Link href={link}>{link}</Link>
          {console.log({link})}
        </HeadingInfoContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
