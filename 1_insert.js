var mongoose = require('mongoose')
var Produk = require('./models/produk')
var url = 
'mongodb://lintang:1234@localhost:27017/db_mongoose'

mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB')
})

new Produk({
    nama: 'Drone', 
    harga: 15000000,
    avail: false,
    exp: Date().now
    // exp: Date.now()
}).save().then((x)=>{
    console.log(x)
}).catch((x)=>{
    console.log(x)
})