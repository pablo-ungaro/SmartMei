import {Kind} from 'graphql/language';
import {GraphQLScalarType} from 'graphql';

export default new GraphQLScalarType({
    name: 'ISODate',
    description: 'JavaScript Date object as an ISO timestamp',
    parseValue(value) {
        return value == null ? null : new Date(value);
    },
    serialize(value) {
        return value instanceof Date ? value.toISOString() : null;
    },
    parseLiteral(ast) {
        return ast.kind === Kind.STRING ? new Date(ast.value) : null;
    },
})