import express, { json } from 'express';
import apiController   from './controllers/api.js';
import cors           from 'cors';
const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;

app.get('/', async (res) => {
    res.json({ status: true, message: "Our node.js app works" })
});

app.get('/prime', cors(), apiController.prime);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
