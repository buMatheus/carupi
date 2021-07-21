const express = require('express');

const Car = require('../models/Car');

const router = express.Router();

router.post('/register', async (req,res) =>{
    //return res.send(console.log(req.body));
    try{
        const car = await Car.create(req.body);
        return res.send({car});
    }catch (err){
        return res.status(400).send({error: 'Falhar ao resgistrar'});
    }
});

router.delete('/:carId', async (req,res) =>{
    //return res.send(console.log(req.params.carId));
    try{
        const car = await Car.deleteOne({ _id: req.params.carId });
        if(car.deletedCount > 0){
            return res.send(console.log('Apagado com sucesso'));
        }else{
            return res.send(console.log('Id não encontrado'));
        }
    }catch (err){
        return res.status(400).send({error: 'Error ao apagar'});
    }
});

router.get('/search', async function(req, res) {
    const {minYear, maxYear, minValue, maxValue} = req.query;
    const query = await Car.find({  ano: { $gte: minYear, $lte: maxYear}, precoVenda: { $gte: minValue, $lte: maxValue} }).exec();
    if(query.length !== 0){
        return res.send(query);
    }else{
        return res.status(400).send({error: 'Nenhum carro encontrado'});
    }
    
})

router.get('/:carId?', async (req,res) =>{
    //return res.send(console.log(req.body));
    if(req.params.carId){
        try{
            let car = await Car.findById(req.params.carId);
            if((car != undefined)&&(car != null)){
                return res.send({car});
                
            }else{
                return res.status(400).send({error: 'Carro não encontrado'});
            }
            
        }catch (err){
            return res.status(400).send({error: 'Carro não encontrado'});
        }
    }else{
        try{
            let cars = await Car.find().populate('car');
            return res.send({cars});
        }catch (err){
            return res.status(400).send({error: 'Error findAll'});
        }
    }
    
});


router.put('/:carId', async (req,res) =>{
    const {marca, modelo, versao, ano, quilometragem, tipoCambio, precoVenda} = req.body;
    try{
        const car = await Car.findOneAndUpdate(req.params.carId, {
            marca,
            modelo,
            versao,
            ano,
            quilometragem,
            tipoCambio,
            precoVenda
        }, {new: true});
        await car.save();

        return res.send({car});
    }catch (err){
        return res.status(400).send({error: 'Update failed'});
    }
});


module.exports = app => app.use('/car', router);