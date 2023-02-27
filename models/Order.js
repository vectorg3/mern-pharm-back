import mongoose, { mongo } from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        orderList: {
            type: Array,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true,
        },
        status: {
            type: String,
            default: 'Создан',
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Order', OrderSchema);
