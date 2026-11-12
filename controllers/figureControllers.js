//importiamo la connessione del DB 
const connection = require('../data/db')

//funzione di index

function index(req, res){
 const sql ='SELECT * FROM '
 //eseguiama la query
 connection.query(sql,(err, results)=>{
    if (err) return res.status(500).json({error:'database query failed'});
    res.json(results)
 })
}

//function show

function show(req,res){

}

module.exports = {index, show}