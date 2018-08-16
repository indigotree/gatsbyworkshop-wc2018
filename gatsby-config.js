module.exports = {
    siteMetadata: {
        title: `Gatsby`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: `gatsbyworkshop.wpengine.com`,
                protocol: `https`,
                hostingWPCOM: false,
                useACF: true,
                searchAndReplaceContentUrls: {
                    sourceUrl: `https://gatsbyworkshop.wpengine.com(?!(wp-content))`,
                    replacementUrl: `/`
                }
            }
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: `./src/images/icon.png`,
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    favicons: true
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `WordCamp Brighton`,
                short_name: `WC Brighton`,
                start_url: `/`,
                background_color: `#663eda`,
                theme_color: `#663eda`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        }
    ],
}
