const { gql } = require("apollo-server")

const typeDefs = gql`
    type Query {
        "Get tracks array"
        tracksForHome: [Track!]!
    }

    " A track grounp of modules"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    "Author of Track"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs