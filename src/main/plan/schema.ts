import {gql} from "apollo-server";

export const typeDef = gql`
  scalar ISODate

  type ProfessionalPlan {
    date:        ISODate!
    description: String!
    BRL:         Float!
    USD:         Float!
    EUR:         Float!
  }

  type Query {
    plan(url: String!): ProfessionalPlan!
  }
`;