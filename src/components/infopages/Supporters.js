import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import loveIllustrationImageSrc from "images/love-illustration.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:pr-12 lg:pr-16 md:order-first` : tw`md:pl-12 lg:pl-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = styled(Slider)`
  ${tw`w-full mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;
const TestimonialHeading = tw.div`mt-4 text-xl font-bold`;
const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col sm:flex-row`;

const CustomerInfo = tw.div`flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-16 h-16 sm:w-20 sm:h-20`;
const CustomerTextInfo = tw.div`text-center md:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-bold text-xl`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;

export default ({
  imageSrc = loveIllustrationImageSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "",
  heading = "",
  description = "",
  textOnLeft = false,
  items = [
    {
      profileImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      heading: "",
      quote:
        "",
      customerName: "",
      customerTitle: ""
    }
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null);
  const HighlightedText = tw.span`text-primary-500`;
  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <ImageColumn>
            <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <Subheading>{subheading}</Subheading>
            <Heading><HighlightedText>{heading}</HighlightedText></Heading>
            <Description>{description}</Description>
            <TestimonialSlider arrows={false} ref={setSliderRef}>
              {items.map((item, index) => (
                <Testimonial key={index}>
                  <TestimonialHeading>{item.heading}</TestimonialHeading>
                  <Quote>{item.quote}</Quote>
                  <CustomerInfoAndControlsContainer>
                    <CustomerInfo>
                      <CustomerProfilePicture src={item.profileImageSrc} alt={item.customerName} />
                      <CustomerTextInfo>
                        <CustomerName>{item.customerName}</CustomerName>
                        <CustomerTitle>{item.customerTitle}</CustomerTitle>
                      </CustomerTextInfo>
                    </CustomerInfo>
                    <Controls>
                      <ControlButton onClick={sliderRef?.slickPrev}>
                        <ArrowLeftIcon />
                      </ControlButton>
                      <div className="divider" />
                      <ControlButton onClick={sliderRef?.slickNext}>
                        <ArrowRightIcon />
                      </ControlButton>
                    </Controls>
                  </CustomerInfoAndControlsContainer>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TextColumn>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
