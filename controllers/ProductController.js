import ProductModel from '../models/Product.js';

export const getAll = async (req, res) => {
    try {
        const products = await ProductModel.find();

        res.json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить товары',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const productId = req.params.id; 
        const product = await ProductModel.findById(productId);

        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить товар',
        });
    }
};
