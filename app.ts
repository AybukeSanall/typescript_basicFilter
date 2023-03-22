import { Product } from './Product';
import{ProductService} from './ProductService';

let _productService=new ProductService(); //ctor'da arraye değerleri atamışttk.
let result;
result=_productService.getProducts();
result=_productService.getById(2)
let p=new Product();
p.id=2;
p.name="Iphone 6";
p.price=4000;
p.category="Telefon";
_productService.saveProduct(p);
//result=_productService.getProducts();
//result=_productService.getByName("Samsung S5");
result=_productService.getByCategory("Telefon");
console.log(result);