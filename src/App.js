import React, { Component } from 'react';
// import { TweenLite } from "gsap";
// import { TweenLite, TimelineLite } from "gsap";
// import { TimelineLite, CSSPlugin, TweenMax } from "gsap/all";
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import strangerMusic from './stranger_things.mp3'

import Hook from 'components/Hook'
import Words from 'components/Words'
import logo from './logo.svg';
import './App.css';

const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  padding: 20px;
`

const TwoLines = styled.div`
  height: 4px;
  width: 100%;
  border: 1px solid #f50000;
  border-radius: 2px;
`

class App extends Component {

  constructor(props) {
    super(props)

    this.myElement = null;
    this.myTween = null;

  }

  render () {
    const words = 'PALABRA FRASE '
    const arrayOfWords = words.trim().split(' ')
    const mapOfWords = arrayOfWords.map((word, index) => {
      const capitalizeFirstAndLastLetter = !(index % 2 > 0)
      return <Words key={`words_${index}`} originalText={word} capitalizeFirstAndLastLetter={capitalizeFirstAndLastLetter} />
    })
    console.log(arrayOfWords)

    return (
      <Container>
        <TwoLines />
        {mapOfWords}
        {/* <audio controls autoPlay={true} src={strangerMusic}></audio> */}
      </Container>
    );
  }
}


export default App;
