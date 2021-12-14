const MongoClient = require('mongodb').MongoClient
const uri= "mongodb+srv://victor2588:victor202@cluster0.79ztq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

let client;

module.exports = function(){
    if(!client){
        try{
            client = new MongoClient(uri, {userNewUrlParser:true, useUnifiedTopology: true});
        }catch(e){
            console.log("Error al conectarse a la BD", e)
        }
        
    }

    return client;
}