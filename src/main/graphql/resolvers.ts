import {fileLoader, mergeResolvers} from 'merge-graphql-schemas'
import path from 'path'


const allResolvers = fileLoader(path.join(__dirname,'**', 'resolver.ts'))
const resolvers = mergeResolvers(allResolvers)

export default resolvers;