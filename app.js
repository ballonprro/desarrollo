//
const path = require('path')//Nos ayuda a acceder a las direcciones del disco duro
const express = require("express")//Servidor de paginas html
const logger = require('morgan')
const bodyParse = require('body-parser')
const app = express()
const indexRoutes = require('./src/routes/index')
const mongoose = require('mongoose')

app.set('port', process.env.PORT || 3000 )// Setear el puerto 
app.set('views' , path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')// Seteamos el motor de vista , ejs
app.use('/css', express.static(path.join(__dirname, 'src/views/css')))
app.use('/img', express.static(path.join(__dirname, 'src/views/img')))
app.use('/JS', express.static(path.join(__dirname, 'src/JS')))



app.use(logger('dev'))
app.use(express.json())
app.use(bodyParse.urlencoded({extended:false})) //Interpretar los caracteres Especiales

mongoose.connect("mongodb+srv://victor2588:victor202@cluster0.79ztq.mongodb.net/Formulario", {useNewUrlParser:true}, {useUnifiedTopology: true})

app.use('/' , indexRoutes)//La consulta se envia al app.js 

const notesSchema = {
    nombres: { type:String, required:true},
    apellidos: String,
    dni:  { type:String, required:true},
    correo: String,
    consulta: String,
    cell: String
}

const Note = mongoose.model("Note" , notesSchema);


app.get('/form' , (req, res ) =>{ //Expones el index
    res.render('Form')
    
})
app.post('/register' , function(req, res ){
     let newNote = new Note({
         nombres:req.body.nombres,
         apellidos:req.body.apellidos,
         dni:req.body.dni,
         correo:req.body.correo,
         consulta:req.body.consulta,
         cell:req.body.cell
     });
     newNote.save();
     res.render('pago') //Página a donde nos envia
 })

app.listen(app.get ('port'), () =>{
    console.log("Servidor en Escuchando" , app.get('port'))//Se empieza a escuchar las consultas
})

