const sequence = {
    _id: 1,
    get id() {
        return this._id++;
    },
};

const products = {};

function setProduct(product) {
    if (!product.id) product.id = sequence.id;
    products[product.id] = product;
    return product;
}

function getProduct(id) {
    return products[id] || {};
}

function getProducts() {
    return Object.values(products);
}

function deleteProduct(id) {
    const product = produtos[id];
    delete products[id];
    return product;
}

module.exports = {
    setProduct,
    getProduct,
    getProducts,
    deleteProduct,
};
