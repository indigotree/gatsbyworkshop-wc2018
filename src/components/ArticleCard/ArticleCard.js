import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import './ArticleCard.css';

export default ({ title, image, date, datetime, slug }) => (
    <article className="article-card">
        <figure className="article-card__figure">
            <Link to={`/${slug}`}>
                <Img
                    alt={image.alt}
                    sizes={image.localFile.childImageSharp.sizes}
                    style={{ display: `block` }}
                />
            </Link>
        </figure>

        <header className="article-card__header">
            <div className="article-card__meta">
                <time dateTime={datetime}>{date}</time>
            </div>
            <h2 className="article-card__title">
                <Link to={`/${slug}`} dangerouslySetInnerHTML={{ __html: title }} />
            </h2>
        </header>

    </article>
);

export const ArticleFragment = graphql`
    fragment ArticleCard on wordpress__POST {
        title
        content
        slug
        excerpt
        date(formatString: "MMMM Do YYYY @ HH:mm:ss")
        datetime: date
        author {
            name
            description
            avatars: avatar_urls {
                image: wordpress_48
            }
        }
        image: featured_media {
            alt: alt_text
            caption
            localFile {
                childImageSharp {
                    sizes(maxWidth: 900, maxHeight: 520, quality: 90) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
        }
    }
`