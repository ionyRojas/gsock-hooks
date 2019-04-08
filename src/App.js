import React, { Component } from 'react';
// import { TweenLite } from "gsap";
// import { TweenLite, TimelineLite } from "gsap";
// import { TimelineLite, CSSPlugin, TweenMax } from "gsap/all";
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import strangerMusic from './stranger_things.mp3'

import Hook from 'components/Hook'
import logo from './logo.svg';
import './App.css';

const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  padding: 20px;
`

const Title = styled.h1`
  font-family: 'stranger-font';
  font-size: 80px;
  text-align: center;
  color: black;
  -webkit-text-stroke: 1px #f50000;
  text-shadow: 3px 3px 0 #f50000, -1px -1px 0 #f50000, 1px -1px 0 #f50000, -1px 1px 0 #f50000, 1px 1px 0 #f50000;
  margin: 0;
  position: relative;
  line-height: 1;

  ${(props) => props.word && css`
    &::first-letter {
      font-size: 120px;
    }
  `}

  &:before {
    content: '${props => props.beforeWord}';
    font-size: 120px;
    position: absolute;
    top: 0;
    transform: translate(-100%);
  }

  &:after {
    content: '${props => props.afterWord}';
    font-size: 120px;
    position: absolute;
    top: 0;
  }
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


  componentDidMount () {
  }

  getLastLetter = (word) => {
    const length = word.length - 1;
    const firstWord = word[0]
    const lastword = word[length];
    const wordWithoutLast = word.slice(1, length)

    return [
      firstWord,
      wordWithoutLast,
      lastword
    ]
  }

  render () {
    const palabra1 = 'LA FRASE'
    const palabra2 = 'FRASE'

    const [palabra1First, palabra1Rest, palabra1Last] = this.getLastLetter(palabra1)

    return (
      <Container>
        {/* <Hook></Hook> */}
        <TwoLines />
        <Title beforeWord={palabra1First} afterWord={palabra1Last}>{palabra1Rest}</Title>
        <Title >{palabra2}</Title>
        <audio controls autoPlay={true} src={strangerMusic}>
        </audio>
      </Container>
    );
  }
}


export default App;
