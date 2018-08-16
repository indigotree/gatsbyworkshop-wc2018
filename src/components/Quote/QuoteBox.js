import React from 'react';
import Img from 'gatsby-image';

import Quote from './Quote';

import './QuoteBox.css';

export default ({ text, author, image, quoteColor }) => (
    <div className="quote-box">
        <div className="quote-box__image">
            <Img alt={image.alt} sizes={image.localFile.childImageSharp.sizes} />
        </div>
        <div className="quote-box__body">
            <Quote text={text} author={author} color={quoteColor} />
        </div>
    </div>
);
