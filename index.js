const {graphql, buildSchema} = require('graphql')//Importamos la utilidades para trabajar con los schemas 

//Definimos el esquema
const schema =  buildSchema(`
 type Query{
    hello: String
 }
`)

//Ejecutamos el query
graphql({
    schema: schema,
    source: '{ hello }'})
.then((data) => {
    console.log(data);
})
.catch(e => {
    console.log(e);
});