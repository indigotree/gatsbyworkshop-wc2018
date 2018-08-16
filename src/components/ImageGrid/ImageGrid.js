import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import './ImageGrid.css';

export default ({ children, items }) => (
    <div className="image-grid">

        {items.map(item => (
            <Link to={item.hyperlink} className="image-grid__item">
                <span>{item.text}</span>
                <Img alt={item.image.alt} sizes={item.image.localFile.childImageSharp.sizes} />
            </Link>
        ))}

    </div>
);
