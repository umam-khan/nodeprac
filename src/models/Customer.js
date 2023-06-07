const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name: String,
    power: String
})

module.exports = mongoose.model('Customer',customerSchema);

// collection name, schema 