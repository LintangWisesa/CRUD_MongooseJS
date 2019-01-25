var mongoose = require('mongoose')
var Produk = require('./models/produk')
var url = 
'mongodb://lintang:1234@localhost:27017/db_mongoose'

mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB')
})

Produk.deleteMany({
    nama: 'Celana Panjang'
}, ()=>{
    console.log('Data terhapus!')
})