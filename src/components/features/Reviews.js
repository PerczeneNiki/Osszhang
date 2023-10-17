import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
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


const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex flex-row-reverse pt-6`;


const Review = tw.p`mt-2 text-sm text-secondary-100`;


const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  id="",
  subheading = "Néhány visszajelzés",
  heading = <><span tw="text-primary-500">Vélemények</span></>,
  description = "Köszönjük.",
  reviews=[{
    name: "Adam Wathan",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }],
  iconRoundedFull = true,
  iconFilled = true,

}) => {
  
  return (
    <Container id={id}>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {reviews[0].map((post, index) => (
            <Column key={index}>
              <Card>
                <Details>                  
                  <FeatureIconContainer
                      iconFilled={iconFilled}
                      iconRoundedFull={iconRoundedFull}
                    >
                      {<post.Icon />}
                    </FeatureIconContainer>
                  <Review>{post.review}</Review>
                  <MetaContainer>{post.name}</MetaContainer>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
