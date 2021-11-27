//ESTE SERA NUESTRO ENRUTADOR - Recibe y envia respuestas
const { render } = require('ejs');//Va importar de la libreria ejs
const fs =require('fs')//Importar desde la libreria fs "sistema de archivos"
const express = require('express')//Servidor de paginas
const router = express.Router() // Traemos el enrutador del servidor express

module.exports = router; //Exportamos el ruteador

router.get('/inicio' ,(req, res) => {
    res.render('index')
})

router.get('/uci' ,(req, res) => {
    res.render('UCI')
})

module.exports = router;