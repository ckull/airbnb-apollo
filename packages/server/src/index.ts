import "reflect-metadata";
import { createTypeORM } from "./utils/createTypeORM";
import schema from './schema'
import { ApolloServer } from 'apollo-server'

const startServer = async () => {
    const server = new ApolloServer({ schema });
    let app;

    try {
        await createTypeORM()
        app = await server.listen({ port: 4000 }, () => {
            console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
        })
    
    } catch (err) {
        console.log(err)
    }
    
    return app

}

startServer()

