//ESTE SERA NUESTRO ENRUTADOR - Recibe y envia respuestas
const { render } = require('ejs');//Va importar de la libreria ejs
const fs =require('fs')//Importar desde la libreria fs "sistema de archivos"
const express = require('express');//Servidor de paginas
const { mongoose } = require('mongoose');
const router = express.Router() // Traemos el enrutador del servidor express
const client = require('../libs/connect')()//Traemos la funcion de coneccion de base de datos


module.exports = router; //Exportamos el ruteador

router.get('/inicio' ,(req, res) => {
    res.render('inicio')
})

router.get('/uci' ,(req, res) => {
    res.render('UCI')
})
router.get('/pago' ,(req, res) => {
    res.render('pago')
})

router.post('/prueba' , (req, res)=> { //ENVIAR INFORMACION A LA BASE DE DATOS
    client.connect(async (err) =>{
        if(!err){ //Preguntamos si no hay error
            const collection = client.db("uci").collection("hospitales") //Conectamos a la base de datos y ala coleccion
            collection.insertOne( req.body) //Nos conectamos a la base de datos
            res.send("resultado: [{'respuesta': 'OK'}]") //Enviamos la respuesta
        }else{
            res.send("resultado: [{'respuesta' : 'Error al cargar'}, {'mensaje' : " + err+ "}]")
        }
    })
})


router.get('/prueba2' , (req, res ) =>{ //Expones el index
    res.render('prueba')
})
router.get('/PO' , (req, res ) =>{ //Expones el index
    res.render('PO')
})



router.post('/prueba2' , (req, res)=> { //TRAER INFORMACION DE LA BASE DE DATOS
    client.connect(async (err) =>{
        if(!err){ //Preguntamos si no hay error
            const collection = client.db("uci").collection("hospitales") //Conectamos a la base de datos y ala coleccion
            collection.find().toArray((err, result) => {
                if(!err){
                    res.render('prueba' , {datos:result})
                }else{
                    res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
                }
            })
        }else{
            res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
        }
    })
})

router.post('/ucinorte' , (req, res)=> { //TRAER INFORMACION DE LA BASE DE DATOS
    client.connect(async (err) =>{
        if(!err){ //Preguntamos si no hay error
            const collection = client.db("uci").collection("limanorte") //Conectamos a la base de datos y ala coleccion
            collection.find().toArray((err, result) => {
                if(!err){
                    res.render('ucinorte' , {datos:result})
                }else{
                    res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
                }
            })
        }else{
            res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
        }
    })
})
router.get('/ucinorte' , (req, res ) =>{ //Expones el index
    res.render('ucinorte')
    
})
router.post('/ucisur' , (req, res)=> { //TRAER INFORMACION DE LA BASE DE DATOS
    client.connect(async (err) =>{
        if(!err){ //Preguntamos si no hay error
            const collection = client.db("uci").collection("limasur") //Conectamos a la base de datos y ala coleccion
            collection.find().toArray((err, result) => {
                if(!err){
                    res.render('ucisur' , {datos:result})
                }else{
                    res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
                }
            })
        }else{
            res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
        }
    })
})
router.get('/ucisur' , (req, res ) =>{ //Expones el index
    res.render('ucisur')
    
})
router.post('/ucicentro', (req, res) => {
        client.connect(async (err) =>{
            if(!err){
                const collection = client.db("uci").collection("limacentro")
                collection.find().toArray((err, result) =>{
                    if(!err){
                        res.render('ucicentro' ,{dato : result})
                    }else{
                        res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
                    }
                })
            }else{
                res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
            }
        })
})
router.get('/ucicentro' , (req, res ) =>{ //Expones el index
    res.render('ucicentro')
    
})
router.post('/poeste' , (req, res)=> { //TRAER INFORMACION DE LA BASE DE DATOS
    client.connect(async (err) =>{
        if(!err){ //Preguntamos si no hay error
            const collection = client.db("po").collection("limaeste") //Conectamos a la base de datos y ala coleccion
            collection.find().toArray((err, result) => {
                if(!err){
                    res.render('poeste' , {datos:result})
                }else{
                    res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
                }
            })
        }else{
            res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
        }
    })
})
router.get('/poeste' , (req, res ) =>{ //Expones el index
    res.render('poeste')
    
})
router.post('/posur' , (req, res)=> { //TRAER INFORMACION DE LA BASE DE DATOS
    client.connect(async (err) =>{
        if(!err){ //Preguntamos si no hay error
            const collection = client.db("po").collection("limasur") //Conectamos a la base de datos y ala coleccion
            collection.find().toArray((err, result) => {
                if(!err){
                    res.render('posur' , {datos:result})
                }else{
                    res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
                }
            })
        }else{
            res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
        }
    })
})
router.get('/posur' , (req, res ) =>{ //Expones el index
    res.render('posur')
    
})
router.post('/ponorte' , (req, res)=> { //TRAER INFORMACION DE LA BASE DE DATOS
    client.connect(async (err) =>{
        if(!err){ //Preguntamos si no hay error
            const collection = client.db("po").collection("limanorte") //Conectamos a la base de datos y ala coleccion
            collection.find().toArray((err, result) => {
                if(!err){
                    res.render('ponorte' , {datos:result})
                }else{
                    res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
                }
            })
        }else{
            res.send("resultado: [{'respuesta' : 'Error al traer la data'}, {'mensaje' : " + err+ "}]")
        }
    })
})
router.get('/ponorte' , (req, res ) =>{ //Expones el index
    res.render('ponorte')
    
})

module.exports = router;