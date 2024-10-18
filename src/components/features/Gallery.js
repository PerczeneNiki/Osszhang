import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading , Subheading as SubheadingBase} from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";
import Ani from "images/Ani.png";

const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Heading = tw(SectionHeading)``;

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

const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col`;

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

export default ({id="",
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "",
  heading = "",
  items = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
    }
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <Container id={id}>
      <ContentWithPaddingXl>
      <Subheading>{subheading}</Subheading>
          <Heading>{heading}</Heading>
        <Row>          
          <TestimonialSlider arrows={false} ref={setSliderRef}>
            {items[0].map((item, index) => (
              <Testimonial key={index}>
                <CustomerInfoAndControlsContainer>
                  <Image style={{height: "400px"}} src={item.imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
                  
                </CustomerInfoAndControlsContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
          
        </Row>
        <Controls style={{display: "ruby-text", paddingTop: "30px"}}>
                    <ControlButton onClick={sliderRef?.slickPrev}>
                      <ArrowLeftIcon />
                    </ControlButton>
                    <div className="divider" />
                    <ControlButton onClick={sliderRef?.slickNext}>
                      <ArrowRightIcon />
                    </ControlButton>
                  </Controls>
      </ContentWithPaddingXl>
    </Container>
  );
};
