import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
import InfoModal from "components/infopages/InfoModal.js";

import waitImage from "images/waitfor.png";
import withbaby from "images/withbaby.png";
import perinatalsession from "images/perinatalsession.png";

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
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300  transform hover:scale-105 `}
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
    
  ],
  linkText = "Bemutatkozás",
  heading = "Cím",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {
   
  return (
    
    <Container id={id}>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          
            <Column key="wait">
               <Card>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={waitImage} alt="hiba" css={imageCss} />
                </span>
                <span className="title">Várandósságra, szülésre készülve</span>
                <p className="description">Már a várandósságra készülve is csatlakozhatsz foglalkozásainkra:</p>
                <p className="description">Születés Hete</p>
                <p className="description">Beszélgetőkörök</p>
                <p className="description">Női jóga</p>
                <p className="description">Kismama jóga</p>
                <p className="description">Babagondozás workshop</p>
                <p className="description">Gyermekágyra hangolódó</p>
                <p className="description">Szülésre-születésre hangolódó</p>                
              </Card> 
            </Column>
            <Column key="wait">
               <Card>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={withbaby} alt="hiba" css={imageCss} />
                </span>
                <span className="title">Kisbabával, kisgyermekkel</span>
                <p className="description">Sok programunkon találkozhatsz hasonló korú gyerekekkel és édesanyjukkal:</p>
                <p className="description">Hangicsáló</p>
                <p className="description">Babamasszázs</p>
                <p className="description">Összhang klub</p>
                <p className="description">Virágom Virága klub</p>
                <p className="description">Hordozós beszélgetőkör</p>
                <p className="description">Pelenkatapogató</p>
                <p className="description">Workshopok</p>                
              </Card> 
            </Column>
            <Column key="wait">
               <Card>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={perinatalsession} alt="hiba" css={imageCss} />
                </span>
                <span className="title">A teljes perinatális időszakban és azon túl</span>
                <p className="description">Ha segítségre van szükséged, vagy csak beszélnél valakivel, akkor is rendelkezésre állunk:</p>
                <p className="description">Pszichológusok</p>
                <p className="description">Perinatális szaktanácsadók</p>
                <p className="description">Dúlák</p>
                <p className="description">Gyermekágyas segítők</p>
                <p className="description">Önkéntes szoptatási segítők</p>
                <p className="description">Hordozási tanácsadók</p>                
              </Card> 
            </Column>
         
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
