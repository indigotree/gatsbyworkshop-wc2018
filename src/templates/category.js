import React, { Component } from 'react';

import Article from '../components/Article/Article';
import { WidgetCategories } from '../components/Widget/Widget';

import BaseLayout from '../components/Layouts/BaseLayout';

export default class CategoryTemplate extends Component {
    render() {
        const { page, posts, categories, category, config } = this.props.data;
        return (
            <BaseLayout config={config} hero={{ image: page.hero, title: category.name }} sidebar={<WidgetCategories title="Categories" categories={categories} />}>
                {posts.edges.map(article => <Article {...article.node} isSummary={true} />)}
            </BaseLayout>
        );
    }
}

export const query = graphql`
    query currentCategoryPage($id: String!, $wordpress_posts_page_id: Int!) {
        category: wordpressCategory(id: { eq: $id }) {
          name
        }
        page: wordpressPage(wordpress_id: { eq: $wordpress_posts_page_id }) {
            title
            hero: featured_media {
                ...HeroImage
            }
        }
        posts: allWordpressPost(filter: { categories: { id: { eq: $id } } }) {
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