var mongoose = require('mongoose')
var Produk = require('./models/produk')
var url = 
'mongodb://lintang:1234@localhost:27017/db_mongoose'

mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB')
})

id = '5c4a84c3d8f537295c250884'
// Produk.findById(id, (error, data)=>{
Produk.findById(id, 'nama harga', (error, data)=>{
    console.log(data)
})