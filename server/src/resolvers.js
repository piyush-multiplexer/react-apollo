const fetch = require("node-fetch")
const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        tracksForHomeFetch: async () => {
            const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
            const res = await fetch(`${baseUrl}/tracks`);
            return res.json();
        }
    },
    Track: {
        // (parent, args, context, info)
        // author: ({ authorId }, _, { dataSources }) => {
        //     return dataSources.trackAPI.getAuthor(authorId);
        // },
        // using fetch instead datasources
        author: async ({ authorId }, _, { dataSources }) => {
            const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
            const res = await fetch(`${baseUrl}/author/${authorId}`);
            return res.json();
        }
    },
};

module.exports = resolvers;