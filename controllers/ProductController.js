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
