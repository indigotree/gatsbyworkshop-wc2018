import React, { Component } from 'react';

import Article from '../components/Article/Article';
import { WidgetCategories } from '../components/Widget/Widget';

import BaseLayout from '../components/Layouts/BaseLayout';

export default class PostTemplate extends Component {
    render() {
        const { post, categories, config } = this.props.data;
        return (
            <BaseLayout config={config} hero={{ image: post.hero, title: post.title }} sidebar={<WidgetCategories title="Categories" categories={categories} />}>
                <Article {...post} />
            </BaseLayout>
        );
    }
}

export const query = graphql`
    query currentPost($id: String!) {
        post: wordpressPost(id: { eq: $id }) {
            hero: featured_media {
                ...HeroImage
            }
            ...Article
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