const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.getProduct = async () => {
    const result = await Product.find({}, 'title price _id active');

    return result;
}

exports.create = async (data) => {
    let produto = Product(data);
    await produto.save();
    
}

exports.put = async (data, id) => {
    await Product.findByIdAndUpdate(id,{
        $set:{
            title: data.title,
            description: data.description,
            price: data.price,
            active: data.active
        }
    })
}

exports.getById = async (id) => {
    const result = await Product.findOne({_id:id}, "_id title desc price active")
    return result;
}