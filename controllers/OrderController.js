import OrderModel from '../models/Order.js';

export const getAll = async (req, res) => {
    try {
        const orders = await OrderModel.find().populate('user').exec();

        res.json(orders);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать заказ',
        });
    }
};
export const getUserOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find({ user: req.userId });
        res.json(orders);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать заказ',
        });
    }
};

export const create = async (req, res) => {
    try {
        const doc = new OrderModel({
            address: req.body.address,
            phone: req.body.phone,
            orderList: req.body.orderList,
            user: req.userId,
        });

        const order = await doc.save();

        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать заказ',
        });
    }
};
