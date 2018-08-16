import React, { Component } from 'react';

import BaseLayout from '../components/Layouts/BaseLayout';

export default class PageTemplate extends Component {
    render() {
        const { page, config } = this.props.data;
        return (
            <BaseLayout config={config} hero={{ image: page.hero, title: page.title }}>
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </BaseLayout>
        );
    }
}

export const query = graphql`
    query currentPage($id: String!) {
        page: wordpressPage(id: { eq: $id }) {
            title
            content
            hero: featured_media {
                ...HeroImage
            }
        }
        config: wordpressGatsbyConfig {
            name
            description
        }
    }
`