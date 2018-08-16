# Gatsby Starter - WCBTN Instructions

## 0. Installation/Setup

### 0) a. Install Node JS (recommended v8.11 LTS)

If you already have Node JS, you can skip this step.

You can download & install Node JS from here: https://nodejs.org/en/ 

### 0) b. Install GIT

If you're on Mac, GIT should already be available through xcode tools, and if you're in Windows, you can download it from here: https://git-scm.com/

### 0) c. Install Gatsby CLI

```
$ npm install --global gatsby-cli
```

If you have problems installing packages globally, then consider one of these approaches: https://docs.npmjs.com/getting-started/fixing-npm-permissions

### 0) d. Create your Gatsby Site

```
$ cd ~/Desktop
$ gatsby new wcbtn-gatsby https://github.com/indigotree/gatsbyworkshop-wc2018-starter.git
$ cd ./wcbtn-gatsby
$ gatsby develop
```

This will download roughly 275mb of JS packages into your Gatsby directory.

If all goes well, you should have a development server running Gatsby, which you can view by visiting http://localhost:8000

## 1. Query GraphQL for all WordPress pages

Gatsby doesn't create pages automatically, we need to query all of our WordPress pages and create physical pages for them.

We first need to query for the WordPress pages. Add this within `gatsby-node.js` to define the query.

```
const queryWordPressPages = `
  {
    allWordpressPage (filter: { status: { eq : "publish" } }) {
      edges {
        node {
          id
          wordpress_id
          slug
          template
        }
      }
    }
  }
`
```

## 2. Run the GraphQL query, and loop through the results

Still inside `gatsby-node.js`, we need to run the GraphQL query, which will return back all of the pages that matched our query. Here we can loop over those pages ready for step 3 where we create the Gatsby pages.

```
return graphql(queryWordPressPages).then(r => {
    if (r.errors) {
        console.log(r.errors);
        reject(r.errors);
    }
    _.each(r.data.allWordpressPage.edges, edge => {
        // step 3. add the createPage function here
    });
})
.then(r => {
    resolve();
});
```

## 3. Create pages with Gatsby

We can use the `createPage` function from Gatsby to create physical pages on our site. This code can be added within the loop that we wrote in step 2.

```
createPage({
    path: edge.node.wordpress_id === config.front_page ? '/' : edge.node.slug,
    component: slash(path.resolve(`./src/templates/page.js`)),
    context: {
        id: edge.node.id,
        wordpress_id: edge.node.wordpress_id
    }
});
```

## 4. Create the `page.js` page template

Every page created by `createPage()` needs to have a template. Let's start by adding an empty template to output the page title & content. Create a file at `src/templates/page.js` and add the following code:

```
import React, { Component } from 'react';

export default class PageTemplate extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.data.page.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: this.props.data.page.content }} />
            </div>
        );
    }
}

export const query = graphql`
    query currentPage($id: String!) {
        page: wordpressPage(id: { eq: $id }) {
            title
            content
        }
    }
`
```

## 5. Re-run the `gatsby-develop` command

As we have now made changes with how Gatsby handles the WordPress content. We need to re run the `gatsby develop` command. You will first need to cancel the current process with `CTRL + C` and then run `gatsby develop`.

## 6. Check Gatsby has created the pages

This should create a Gatsby page for each of our WordPress pages. If you visit `http://localhost:8000/nope`, which is the Gatsby dev 404 page, you should be able to see a list of all pages created by Gatbsy.

Try to visit one of the pages Gatsby has created for us, such as `http://localhost:8000/about` where we should see our title & content from WordPress.

## 7. Improving our `page.js` template

Update our `src/templates/page.js` template to include the following code:

```
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
```

## 8. Tell Gatsby to use our homepage template

During step 3, in `gatsby-node.js`, we told Gatsby to create all pages using our `page.js` template. But as we would like our homepage to use a different template, we can add a check to see which page is being created and provide Gatsby with the correct template to use.

Inside `gatsby-node.js`, find the `createPage()` code that we added previously, and update the component with:

```
component: (
  () => {
      if (edge.node.wordpress_id === config.front_page) {
          return slash(path.resolve(`./src/templates/home.js`));
      }
      return slash(path.resolve(`./src/templates/page.js`));
  }
)(),
```

Next, we need to remove the temporary homepage that you can find at `src/pages/index.js`. Simply delete this file.

## 9. Re-run the `gatsby-develop` command

As we have now made changes with how Gatsby handles the WordPress content. We need to re run the `gatsby develop` command like we did in step 5.
