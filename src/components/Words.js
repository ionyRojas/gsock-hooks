import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { css } from '@emotion/core'

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

    ${(props) => props.capitalizeFirstAndLastLetter && `
        &:before {
            content: '${props.beforeWord}';
            font-size: 120px;
            position: absolute;
            top: 0;
            transform: translate(-100%);
        }

        &:after {
            content: '${props.afterWord}';
            font-size: 120px;
            position: absolute;
            top: 0;
        }

    `}
`

const Words = ({ originalText = '', capitalizeFirstAndLastLetter }) => {
    function getLastLetter (word) {
        const length = word.length - 1;
        const firstLetter = word[0]
        const lastLetter = word[length];
        const wordWithoutLast = word.slice(1, length)

        return [
            firstLetter,
            wordWithoutLast,
            lastLetter
        ]
    }

    const [firstLetter, restWord, lastLetter] = getLastLetter(originalText)

    return (
        <Title capitalizeFirstAndLastLetter={capitalizeFirstAndLastLetter} beforeWord={firstLetter} afterWord={lastLetter}>
            {capitalizeFirstAndLastLetter ? restWord : originalText}
        </Title>
    );
};

Words.propTypes = {

};

export default Words;