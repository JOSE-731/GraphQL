const {graphql, buildSchema} = require('graphql')//Importamos la utilidades para trabajar con los schemas 

//Definimos el esquema
const schema =  buildSchema(`
 type Query{
    hello: String,
    name: String
 }
`)

//Configuracion de resolvers: definimos lo que devolverá la consulta
const resolvers ={
    hello: ()=>{
        return 'Hola mundo'
    },
    name: ()=>{
        return 'Jose'
    }
}

//Ejecutamos el query
graphql(schema, '{hello, name}', resolvers).then((data) =>{
    console.log(data)
})