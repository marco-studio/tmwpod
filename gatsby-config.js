module.exports = {
  siteMetadata: {
    title: `The Middle West`,
    description: `A fortnightly Podcast dealing with Western and inherently Islamic issues through the lens of #BalancingTheDiscourse`,
    author: `The Middle West Podcast`,
    twitter: `http://twitter.com/@TheMiddleWestPC`,
    instagram: ``,
    facebook: `https://www.facebook.com/TheMiddleWestPC/`,
    youtube: `https://www.youtube.com/channel/UC66K029HbwHTMML9TAULCsA`,
    apple: `https://podcasts.apple.com/podcast/id1454395587?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9taWRkbGV3ZXN0LmxpYnN5bi5jb20vcnNz`,
    pocket: `https://pca.st/itunes/1454395587`,
    spotify: ``,
    overcast: `https://overcast.fm/itunes1454395587`,
    castbox: `https://castbox.fm/vic/1454395587`,
    castro: `https://castro.fm/itunes/1454395587`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Fmiddlewest.libsyn.com%2Frss`,
    player: `https://player.fm/series/https%253A%252F%252Fmiddlewest%252Elibsyn%252Ecom%252Frss`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://middlewest.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
