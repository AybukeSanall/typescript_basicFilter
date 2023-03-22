"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource(); //nesne oluşturduk.
        this.products = new Array();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); }); //liste üzerine ekledik.
    }
    ProductService.prototype.getByCategory = function (category) {
        var categoryResult = this.products.filter(function (p) { return p.category == category; });
        return categoryResult;
    };
    ProductService.prototype.getByName = function (name) {
        return this.products.filter(function (p) { return p.name == name; })[0];
    };
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id == id; })[0]; //id ile eşleşen ilk kaydı getir.
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product); //yeni üretilen id ile birlikte listeye ekledik.
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) { //o id ile ürün oldukça key'i arttır.
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
