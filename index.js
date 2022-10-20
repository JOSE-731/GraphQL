require('dotenv').config()
const { makeExecutableSchema } = require('graphql-tools')//Importamos la utilidades para trabajar con los schemas 
const express = require('express')
const { graphqlHTTP } = require('express-graphql') //Importamos el middleware de express graphql
const {readFileSync} = require('fs') //Utilizamos el modulo fs para leer el archivo
const {join} = require('path')//Utilizamos join para unir el path del archivo
const resolvers = require('./lib/resolvers')
const app = express()

const port = 3000

//Definimos el esquema
const typeDefs = readFileSync(
    join(
        __dirname, 'lib', 'schema.graphql'
    ), 'utf-8'
)

const schema = makeExecutableSchema({typeDefs, resolvers})

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