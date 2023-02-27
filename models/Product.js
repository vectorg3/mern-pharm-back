import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    full_background: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Product', ProductSchema);
