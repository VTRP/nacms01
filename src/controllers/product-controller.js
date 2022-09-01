const mongoose = require('mongoose');
const repository = require('../repositories/product-repository')


exports.get = async(req, res, next)=> {
    const data = await repository.getProduct();
    res.status(200).send(data);
}

exports.post = async(req, res, next) => {
    try{
    await repository.create(req.body)
    res.status(201).send({message: "Sucesso"});
}catch(erro){
    res.status(400).send({message: "Erro"});
}
}

exports.put = async (req, res, next) =>{
    const id = req.params.id;
    const body = req.body;
    await repository.put(id, body);
    res.send(200).send({message: "Atualizado"})
}

exports.getById() = async(req, res, next) =>{
    const id = req.params.id;

    const data = await repository.getById(id);

    if(data == null)
        res.status(400).send();
    res.status(200).send(data);
}