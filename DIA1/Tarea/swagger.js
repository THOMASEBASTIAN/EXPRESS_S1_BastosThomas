import swaggerAutogen from "swagger-autogen"

const autputFile='./swagger.json'
const endPointsFiles=['./app.js']

const doc={
    info: {
        title:'Api de campus',
        description:'Esta api sirve para manejar el sistema de informacion' 
    },
    host:'localhost:3000',
    schemes:['http']
}
swaggerAutogen()(autputFile,endPointsFiles,doc)