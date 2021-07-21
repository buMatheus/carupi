const mongoose = require('../database');

const CarSchema = new mongoose.Schema({
    marca: {
        type: String,
        require: true,
    },
    modelo: {
        type: String,
        require: true,
    },
    versao: {
        type: String,
        require: true,
    },
    ano: {
        type: Number,
        require: true,
    },
    quilometragem: {
        type: Number,
        require: true,
    },
    tipoCambio: {
        type: String,
        require: true,
    },
    precoVenda: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;