import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import emailjs from 'emailjs-com';
import emailsorozat from "images/emails.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row place-content-evenly`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`
 
function sendEmail(e){
  e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

  emailjs.sendForm('service_gi12d6g', 'template_mfytcis', e.target, 'm-8xebMSUuo6oS2sD')
    .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
    });
}

export default ({id="infoemail"}) => {
  
  return (
    <Container id={id}>
      
        
        <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Segítünk felkészülni! Iratkozz fel ingyenes email sorozatunkra!</h2>
            <h3>Hasznos információk a várandósságtól a kisgyermekes időszakig.</h3>
            <form action="#" onSubmit={sendEmail}>
              <TwoColumn>
              <ImageColumn>
          <Image imageSrc={emailsorozat} />
        </ImageColumn>
                <Column>
          <iframe title="infoemail" src="infoemails.html" width="auto" height="410" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
                  {/*<InputContainer>
                    <Label htmlFor="from_name">Hogyan szólíthatunk?</Label>
                    <Input id="from_name" type="text" name="from_name" placeholder="pl. Nagy Anna" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="from_email">Email címed</Label>
                    <Input id="from_email" type="email" name="from_email" placeholder="pl. nagya@gmail.com" />
                  </InputContainer>
                  <SubmitButton type="submit" value="Submit">Küldés</SubmitButton>*/}
                </Column>
              </TwoColumn>

              
            </form>

            <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127" type="text/javascript"></script>
        <script>
            fetch("https://assets.mailerlite.com/jsonp/658136/forms/117251669505344988/takel")
        </script>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
        </Content>      
      
    </Container>
  );
};
