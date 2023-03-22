import { Product } from "./Product"     //Product sınıfını burada kullanacağımız için import ettik.
export interface IProductService{       //dışarıda kullanbilmek için export ettik.
    getById(id: number):Product;       //metotun tipi(döndüreceği değer.) product
    getProducts():Array<Product>;
    saveProduct(product:Product):void;   //alacağı parametrenin tipi product
    deleteProduct(product:Product):void;
    getByName(name:string):Product;
    getByCategory(category:string):Array<Product>;//
}
