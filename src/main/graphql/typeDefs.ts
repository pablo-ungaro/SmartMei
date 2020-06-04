import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import path from 'path'

const allTypes = fileLoader(path.join(__dirname, '**', '*.gql'))
const typeDefs = mergeTypes(allTypes)

export default typeDefs