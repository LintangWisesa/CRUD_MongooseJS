var mongoose = require('mongoose')
var Produk = require('./models/produk')
var url = 
'mongodb://lintang:1234@localhost:27017/db_mongoose'

mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB')
})

Produk.deleteOne({
    _id: '5c4a82acdb667410e817bf0c'
    // nama: 'Celana Panjang'
}, ()=>{
    console.log('Data terhapus!')
})