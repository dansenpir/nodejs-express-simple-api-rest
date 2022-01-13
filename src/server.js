const port = 3003;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
    res.send(db.getProducts());
});

app.get('/products/:id', (req, res) => {
    res.send(db.getProduct(req.params.id));
});

app.post('/products', (req, res) => {
    const product = db.setProduct({
        name: req.body.name,
        price: req.body.price,
    });
    res.send(product);
});

app.put('/products/:id', (req, res) => {
    const product = db.setProduct({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
    });
    res.send(product);
});

app.delete('/products/:id', (req, res) => {
    const product = db.deleteProduct(req.params.id);
    res.send(product);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
