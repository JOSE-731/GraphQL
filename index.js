const { graphql, buildSchema } = require('graphql')//Importamos la utilidades para trabajar con los schemas 
const express = require('express')
const { graphqlHTTP } = require('express-graphql') //Importamos el middleware de express graphql
const app = express()

const port = 3000

//Definimos el esquema
const schema = buildSchema(`
 type Query{
    hello: String,
    name: String
 }
`)

//Configuracion de resolvers: definimos lo que devolverá la consulta
const resolvers = {
    hello: () => {
        return 'Hola mundo'
    },
    name: () => {
        return 'Jose'
    }
}

//Ejecutamos el query
/*graphql(schema, '{hello, name}', resolvers).then((data) => {
    console.log(data)
})*/

//Definimos la ruta

app.use('/api', graphqlHTTP({
    schema: schema, //Pasamos el schema que definimos arriba
    rootValue: resolvers, //Pasamos el resolver
    graphiql:true //El entrono de desarrollo 
}))

app.listen(port, () => {
    console.log("Corriendo sin problemas")
})