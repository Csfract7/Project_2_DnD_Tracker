const mongoose = require('mongoose')

const spellSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: {type: String, required: true, unique: true}
}, { timestamps: true })

const Spells = mongoose.model('Spells', spellSchema);
module.exports = Spells