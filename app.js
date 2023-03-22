"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService(); //ctor'da arraye değerleri atamışttk.
var result;
result = _productService.getProducts();
result = _productService.getById(2);
var p = new Product_1.Product();
p.id = 2;
p.name = "Iphone 6";
p.price = 4000;
p.category = "Telefon";
_productService.saveProduct(p);
//result=_productService.getProducts();
//result=_productService.getByName("Samsung S5");
result = _productService.getByCategory("Telefon");
console.log(result);
