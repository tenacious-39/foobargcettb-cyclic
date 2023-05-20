import React from 'react';
import Typewriter from "typewriter-effect";
import './Css/TypingEffect.css';

function TypingEffect() {
  return (
    <div className="TypingEffect">
      <Typewriter

        onInit={(typewriter) => {

          typewriter
            .typeString("Foobar")
            .pauseFor(1000)
            .deleteAll(50)
            .typeString("Let's start coding")
            .start();


        }}

      />
    </div>
  );
}

export default TypingEffect;