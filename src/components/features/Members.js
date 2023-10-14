import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import IlikeImage from "images/Ilike.png";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import InfoModal from "components/infopages/InfoModal.js";


const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`sm:w-1/2 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center`}
    img {
      ${tw`w-24 h-24`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50 ` }
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-md inset-0 flex inset-0 items-center rounded-xl bg-gray-300 border-2 border-primary-500 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({id="",
  cards = [
    {
      imageSrc: IlikeImage,
      title: "Feithné Krajcsik Ilona",
      description: "perinatális szaktanácsadó, önkéntes szoptatást segítő, jógaoktató, ének-zene szakos tanár",
      url: "https://timerse.com"
    }    
  ],
  linkText = "Bemutatkozás",
  heading = "Cím",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState("");
  const [nameModal, setNameModal] = useState("");
  const [imgModal, setImgModal] = useState("");
  cards[0].map((card, i) => (console.log(card.description)));
  return (
    
    <Container id={id}>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards[0].map((card, i) => (
            <Column key={i}>
              { <Card onClick={() => {setShowModal(true); setNameModal(card.title);setContentModal(card.about);setImgModal(card.imageSrc)}}>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={window.location.origin + "/" +card.imageSrc} alt="hiba" css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
                {linkText && (
                  <span className="link">
                    <span>{linkText}</span>
                    <ArrowRightIcon className="icon" />
                  </span>
                )}
              </Card> }
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
      <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={showModal === true}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() =>setShowModal(false)} show={showModal} content={contentModal}
        >          
          <div className="content">
          <InfoModal id="abouts" heading= {nameModal} image={imgModal} description={contentModal}/>
          </div>
        </StyledModal>
    </Container>
  );
};
