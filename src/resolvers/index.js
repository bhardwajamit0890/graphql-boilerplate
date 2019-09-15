import path from 'path'
import { mergeResolvers, fileLoader } from 'merge-graphql-schemas'

const resolversArray = fileLoader(path.join(__dirname, '../**/*.resolver.*'))
export default mergeResolvers(resolversArray)
