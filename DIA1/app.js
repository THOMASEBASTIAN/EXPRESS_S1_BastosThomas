/*
--Dia1--

*/
//importacion de express en variabl app
const express= require('express');
const app = express();
//OJO ANIDAR TOdo a usar json
app.use(express.json());
require('dotenv').config();
//Definimos el puertp
const PORT = process.env.PORT;
// Ruta principal -- ENDPOINT
app.get('/',(req,res)=>{
    res.send('holis bienvenidos a express');
});
app.get('/mensaje1',(req,res)=>{
    res.send('Este es otro endpoint');
}); 
app.post('/mensaje1',(req,res)=>{
    res.send('post falso');
}); 
app.get('/mensaje2',(req,res)=>{
    let.jsonsito={
        "mensaje":"tolon"
    };
    res.json(jsonsito);
}); 

//Ruta con parametro
app.get('/mensajePersonalizado/:nombre',(req,res)=>{
    const nombre =req.params.nombre;
    res.send(`hola ${nombre}`);
});

//Ruta post 
app.post('/mensajeJSON',(req,res)=>{
    const menJson= req.body;
    console.log(menJson);
    res.send(`Hola ${menJson["nombre"]} el cual tiene ${menJson["ed"]}años/s`); 
})
//iniciar el servidor
app.listen(PORT,()=>{
    console.log ("servidor iniciado");
});
