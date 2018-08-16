import React, { Component } from 'react';

import Article from '../components/Article/Article';
import { WidgetCategories } from '../components/Widget/Widget';

import BaseLayout from '../components/Layouts/BaseLayout';

export default class BlogTemplate extends Component {
    render() {
        const { page, posts, categories, config } = this.props.data;
        return (
            <BaseLayout config={config} hero={{ image: page.hero, title: page.title }} sidebar={<WidgetCategories title="Categories" categories={categories} />}>
                {posts.edges.map(article => <Article {...article.node} isSummary={true} />)}
            </BaseLayout>
        );
    }
}

export const query = graphql`
    query currentBlogPage($id: String!) {
        page: wordpressPage(id: { eq: $id }) {
            title
            hero: featured_media {
                ...HeroImage
            }
        }
        posts: allWordpressPost {
            edges {
                node {
                    ...Article
                }
            } 
        }
        categories: allWordpressCategory {
            edges {
                node {
                    name
                    slug
                }
            }
        }
        config: wordpressGatsbyConfig {
            name
            description
        }
    }
`