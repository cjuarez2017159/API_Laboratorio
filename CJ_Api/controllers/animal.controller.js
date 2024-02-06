const Animal = require('../models/animal');
const { response } = require('express');

const animalesGet = async (req, res = response) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    const [total, animales] = await Promise.all([
        Animal.countDocuments(query),
        Animal.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        animales
    });
}

const getAnimalById = async (req, res) => {
    const { id } = req.params;
    const animal = await Animal.findOne({ _id: id});

    res.status(200).json({
        animal
    });
}

const putAnimales = async (req, res = response) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const animal = await Animal.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: 'Animal Actualizado Exitosamente!!!',
        animal
    });
}

const animalesDelete = async (req, res) => {
    const { id } = req.params;
    const animal = await Animal.findByIdAndUpdate(id, {estado: false});

    res.status(200).json({
        msg: 'Animal Eliminado Exitosamente!!!',
        animal
    });
}

const animalesPost = async (req, res) => {
    const { nombre, especie, raza, edad } = req.body;
    const animal = new Animal({ nombre, especie, raza, edad});

    await animal.save();
    res.status(200).json({
        animal
    });
}

module.exports = {
    animalesPost,
    animalesGet,
    getAnimalById,
    putAnimales,
    animalesDelete
}