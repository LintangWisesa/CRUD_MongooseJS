var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produkSchema = new Schema({
    nama: String,
    harga: Number,
    avail: Boolean,
    exp: {
        type: Date, 
        default: Date.now
    }
})

var Produk = 
mongoose.model('produk', produkSchema)

module.exports = Produk