//
const path = require('path')//Nos ayuda a acceder a las direcciones del disco duro
const express = require("express")//Servidor de paginas html
const logger = require('morgan')
const bodyParse = require('body-parser')
const app = express()
const indexRoutes = require('./src/routes/index')

app.set('port', process.env.PORT || 3000 )// Setear el puerto
app.set('views' , path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')// Seteamos el motor de vista , ejs
app.use('/css', express.static(path.join(__dirname, 'src/views/css')))
app.use('/imagen', express.static(path.join(__dirname, 'src\views\img')))


app.use(logger('dev'))
app.use(express.json())
app.use(bodyParse.urlencoded({extended:false})) //Interpretar los caracteres Especiales

app.use('/' , indexRoutes)//La consulta se envia al app.js 

app.listen(app.get ('port'), () =>{
    console.log("Servidor en Escuchando" , app.get('port'))//Se empieza a escuchar las consultas
})

