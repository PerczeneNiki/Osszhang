import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import banner from "../../images/banner.png";

const Container = styled.div`
  ${tw`relative flex flex-col flex-wrap bg-cover`}
`;

const ThreeColumnContainer = styled.div`
  ${tw`relative flex flex-col items-center flex-wrap max-w-screen-lg mx-auto pb-0`}
`;

const Heading = tw(SectionHeading)`w-full`;

const ImageContainer = styled.a`
    ${tw`text-center`}
`;

export default ({ heading = "Amazing Features" }) => {

  return (
    <Container>
      <ImageContainer>
        <img src={banner} alt="" />
      </ImageContainer>
      <ThreeColumnContainer>
        <Heading>{heading}</Heading>
      </ThreeColumnContainer>
    </Container>
  );
};
