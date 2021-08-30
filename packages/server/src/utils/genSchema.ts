import * as glob from 'glob';
import * as path from "path";
import * as fs from 'fs';

const genSchema = () => {
    const pathToModules = path.join(__dirname, "../modules")
    const typeDefs = glob.sync(`${pathToModules}/**/*.graphql`)
    .map(i => fs.readFileSync(i, { encoding: "utf8"}))

    

    const resolvers = glob
    .sync(`${pathToModules}/**/resolvers.ts`)
    .map(i => require(i).default);


    return { typeDefs, resolvers }
}

export default genSchema