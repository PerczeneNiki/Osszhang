import React from 'react';
import myText from 'texts/IlikeBemutatkozas.txt';

const handleClick = ({mytext}) => {
  console.log(myText);
  console.log(mytext);

    fetch(mytext)
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    }) 
    
    fetch(myText)
    .then((r) => r.text())
    .then(text  => {
      console.log("myText")
      console.log(text);
    }) 
  }   

export default () => {  
  const mytext = 'texts/IlikeBemutatkozas.txt';
      return(
        <div>   
        { <button onClick={() => {handleClick({mytext})}} className="LoadMyFile" name="button" variant="flat">test string</button> }
      </div>
      )
}