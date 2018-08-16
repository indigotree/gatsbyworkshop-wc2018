import React from 'react';
import Link from 'gatsby-link';

import Author from './Author';

import './Article.css';

export default ({ content, excerpt, title, slug, date, datetime, isSummary, author }) => (
    <article className={`article article--${isSummary ? `summary`: `full`}`}>
        <header className="article__header">
            <div className="article__meta">
                <time dateTime={datetime}>{date}</time>
            </div>
            <h2 className="article__title">
                {isSummary ? (
                    <Link to={`/${slug}`} dangerouslySetInnerHTML={{ __html: title }} />
                ) : (
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                )}
            </h2>
        </header>
        <div className="article__body">
            <div dangerouslySetInnerHTML={{ __html: isSummary ? excerpt : content }} />
        </div>
        {!isSummary && (
            <footer>
                <Author {...author} />
            </footer>
        )}
    </article>
);

export const ArticleFragment = graphql`
    fragment Article on wordpress__POST {
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
    }
`