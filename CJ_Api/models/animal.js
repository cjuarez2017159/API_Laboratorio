const { Schema, model } = require('mongoose');

const AnimalSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    especie:{
        type: String,
        required: [true, 'La especie es obligatoria']
    },
    raza:{
        type: String,
        required: [true, 'La raza es obligatoria']
    },
    edad:{
        type: Number,
        required: [true, 'La edad es obligatoria']
    },
    img:{
        type: String
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('animal', AnimalSchema);