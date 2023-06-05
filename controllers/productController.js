const Product = require("../models/productModel");
module.exports = {
    create: createNewProduct,
    get: getAllProducts,
    getOne: getProduct,
    delete: deleteProduct,
    update: updateProduct,
}


async function createNewProduct(reqBody) {
    try 
    {
        let newProduct = new Product({
            name: reqBody.name,
            stock: reqBody.stock,
            price: reqBody.price
        })
        await newProduct.validate();
        const product = await newProduct.save();
        return {"product": product};
    }
    catch (error)
    {
        return {"error": error.message}
    }
}

async function getAllProducts() {
    let products = await Product.find({})
    return products;
}

async function getProduct(reqParams) {
    try 
    {
        const id = reqParams.id;
        let product = await Product.findById(id);
        return {product: product};
    }
    catch (error)
    {
        return {"error": error.message}
    }
}

async function deleteProduct(reqBody) {
    try
    {
        const id = reqBody.id;
        let product = await Product.findByIdAndDelete(id);
        return {
            "message": `Product ${id} deleted.`,
            "product": product
        };
    }
    catch (error)
    {
        return {"error": error.message};
    }
}

async function updateProduct(reqBody) {
    try 
    {
        const id = reqBody.id;
        let updatedProduct = {
            name: reqBody.name,
            price: reqBody.price,
            stock: reqBody.stock
        };
        let oldProduct = await Product.findByIdAndUpdate(id, updatedProduct);
        return {
            message: `Product ${id} updated`,
            oldProduct: oldProduct
        };
    }
    catch (error)
    {
        return {"error": error.message};
    }
}