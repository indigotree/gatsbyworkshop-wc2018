const _ = require('lodash');
const path = require('path');
const slash = require(`slash`);

const queryWordPressGatsbyConfig = `
  {
    wordpressGatsbyConfig {
      per_page
      front_page
      posts_page
    }
  }
`

// step 1. add graphql query for wp pages here

exports.createPages = ({ graphql, boundActionCreators }) => {

    let config;
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        
        graphql(queryWordPressGatsbyConfig)
            .then(r => {
                if (r.errors) {
                    console.log(r.errors);
                    reject(r.errors);
                }
                return r.data.wordpressGatsbyConfig;
            })

            .then(config => {
                
                // step 2. query for wordpress pages, and then loop over them
                // when adding step 4, please remove the resolve(); function below.
                
                resolve();

            });

    });

};
