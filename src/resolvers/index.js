import path from 'path'
import { mergeResolvers, fileLoader } from 'merge-graphql-schemas'

/**
 * Merges all the reslovers into one object
 */
const resolversArray = fileLoader(path.join(__dirname, '../**/*.resolver.*'))
export default mergeResolvers(resolversArray)
