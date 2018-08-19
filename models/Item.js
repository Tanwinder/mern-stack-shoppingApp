const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.new
    }
})

exports.module = Item = mongoose.model('item', ItemSchema);