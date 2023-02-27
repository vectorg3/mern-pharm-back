import express from 'express';
import mongoose from 'mongoose';
import {
    registerValidation,
    loginValidation,
    orderCreateValidation,
} from './validation.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';
import * as ProductController from './controllers/ProductController.js';
import * as OrderController from './controllers/OrderController.js';
import cors from 'cors';
import { check } from 'express-validator';

mongoose.set('strictQuery', false);
mongoose
    .connect(
        'mongodb+srv://admin:wwwwww@web-pharmacy.pg9307r.mongodb.net/web-pharmacy?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('DB OK');
    })
    .catch((err) => {
        console.log('DB ERROR', err);
    });

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);
app.get('/products', ProductController.getAll);
app.post('/orders', checkAuth, orderCreateValidation, OrderController.create);
app.get('/orders', OrderController.getAll);
app.get('/orders/user', checkAuth, OrderController.getUserOrders);
app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK');
});
