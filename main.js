import crypto from "crypto"

class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        console.error("All fields are required.");
        return;
      }
  
      const exists = this.products.includes(
        (exists) => exists.code === product.code
      );
      if (exists) {
        console.error("The product code already exists.");
        return;
      }
  
      const newProduct = {
        id: crypto.randomBytes(10).toString("hex"),
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail,
        code: product.code,
        stock: product.stock,
      };
  
      this.products.push(newProduct);
      console.log("Product successfully added.");
    }
  
    getProductById(productId) {
      const product = this.products.find((prod) => prod.id === productId);
      if (!product) {
        console.log("Not Found");
      }
      return product;
    }
  }