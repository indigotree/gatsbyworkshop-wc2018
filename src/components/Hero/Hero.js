import React from 'react';
import Img from 'gatsby-image';

import './Hero.css';

const Hero = ({ image, title, height }) => (
    <figure className="hero">
        <div className="hero__text">
            <h1
                className="hero__title"
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </div>
        <div className="hero__image">
            <Img
                alt={image.alt}
                resolutions={image.localFile.childImageSharp.resolutions}
                style={{ width: `100%`, display: `block`, height }}
            />
        </div>
        <div
            className="hero__caption"
            dangerouslySetInnerHTML={{ __html: image.caption }}
        />
    </figure>
);

Hero.defaultProps = {
    height: `85vh`
};

export default Hero;

export const HeroImageFragment = graphql`
    fragment HeroImage on wordpress__wp_media {
        alt: alt_text
        caption
        localFile {
            childImageSharp {
                resolutions(width: 1800, height: 980, quality: 90) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
    }
`
