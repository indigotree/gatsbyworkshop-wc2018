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
                baseUrl: process.env.WP_API,
                protocol: process.env.WP_API_PROTOCOL || `https`,
                hostingWPCOM: false,
                useACF: true,
                searchAndReplaceContentUrls: {
                    sourceUrl: `${process.env.WP_API_PROTOCOL || `https`}://${process.env.WP_API}/(?!(wp-content))`,
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
