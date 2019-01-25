var mongoose = require('mongoose')
var Produk = require('./models/produk')
var url = 
'mongodb://lintang:1234@localhost:27017/db_mongoose'

mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB')
})

Produk.updateOne({
    _id: '5c4a8b9a66daed35885f972f'
}, {
    nama: 'DJI Drone',
    harga: 18000000
}, ()=>{
    console.log('Data terupdate!')
})