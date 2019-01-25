var mongoose = require('mongoose')
var Produk = require('./models/produk')
var url = 
'mongodb://lintang:1234@localhost:27017/db_mongoose'

mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB')
})

Produk.updateMany({
    harga: {$gt: 0}
}, {
    nama: 'Barang Rahasia',
    deskripsi: 'Barang langka'
}, ()=>{
    console.log('Data terupdate!')
})