module.exports = {
  siteMetadata: {
    title: "Toddlerpillars PFP project",
    content: "Toddlerpillars are a collection of 9,999 NFTs with over 888 unique and mind-bending traits.This enormous variety ensures that even the most \"common\" ones will be far from that! Every Toddlerpillar will look dramatically different to its siblings. So much so, that those special creatures, with a combination of the rarest traits, including a handful of 1/1 traits, will be highly coveted by collectors!",
    subtitle: "The Toddlerpillars are launching in November.",
    subcontent: "The first 1,000 Toddlerpillars discord members who reach \"Egg Dwellar\" rank will be whitelisted for our PRE-SALE!",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
  ],
};
