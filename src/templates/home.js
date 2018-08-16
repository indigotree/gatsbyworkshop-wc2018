import React, { Component } from 'react';

import Band from '../components/Band/Band';
import QuoteBox from '../components/Quote/QuoteBox';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import WideLayout from '../components/Layouts/WideLayout';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import { Row, Column, Container } from '../components/Grid/Grid';

export default class HomeTemplate extends Component {
    render() {
        const { page, config, posts } = this.props.data;
        return (
            <WideLayout config={config} hero={{ image: page.hero, title: config.description, height: `100vh` }}>

                {page.content && (
                    <Band bgColor="#ece9e7">
                        <div style={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: page.content }} />
                    </Band>
                )}

                {page.acf.image_grid && (
                    <Band>
                        <ImageGrid items={page.acf.image_grid} />
                    </Band>
                )}

                {page.acf.quote && (
                    <Band bgColor="#23ab3c">
                        <QuoteBox {...page.acf.quote} iconColor="#23ab3c" />
                    </Band>
                )}

                {posts && (
                    <Band title="Recent Articles">
                        <Row style={{ marginBottom: '-35px' }}>
                            {posts.edges.map(post => (
                                <Column sm="4"><ArticleCard {...post.node} /></Column>
                            ))}
                        </Row>
                    </Band>
                )}

            </WideLayout>
        );
    }
}

export const query = graphql`
    query currentHomePage($id: String!) {
        page: wordpressPage(id: { eq: $id }) {
            title
            content
            hero: featured_media {
                ...HeroImage
            }
            acf {
                image_grid {
                    text
                    hyperlink
                    image {
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
                quote {
                    text
                    author
                    image {
                        alt: alt_text
                        caption
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 520, maxHeight: 680, quality: 90) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
        config: wordpressGatsbyConfig {
            name
            description
        }
        posts: allWordpressPost (sort: { fields: [date], order: DESC }, limit: 3) {
            edges {
                node {
                    ...ArticleCard
                }
            }
        }
    }
`