var mongoose = require('mongoose')
var Produk = require('./models/produk')
var url = 
'mongodb://lintang:1234@localhost:27017/db_mongoose'

mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB')
})

Produk.find({
    // nama: 'Kemeja Batik'
    harga: { $gte: 180000 }
}, (error, data)=>{
    console.log(data)
})