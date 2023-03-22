import{ IProductService } from "./IProductService"; //-->aynı dizinde olduğu için direkt ./ismi şeklinde import ettik
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";
export class ProductService implements IProductService{
    private dataSource:SimpleDataSource; 
    private products:Array<Product>; 

    constructor() {
        this.dataSource=new SimpleDataSource(); //nesne oluşturduk.
        this.products=new Array<Product>();
        this.products=new Array<Product>();
        this.dataSource.getProducts().forEach(p=>this.products.push(p)); //liste üzerine ekledik.
        
    }
    getByCategory(category: string): Product[] { //
        let categoryResult=this.products.filter(p=>p.category==category);
        return categoryResult;
    }
    getByName(name: string): Product {
        return this.products.filter(p=>p.name==name)[0];
    }

    getById(id: number): Product {
        return this.products.filter(p=>p.id==id)[0]; //id ile eşleşen ilk kaydı getir.
    }
    getProducts(): Product[] {
       return  this.products;
    }
    saveProduct(product: Product): void {
        if(product.id==0 ||product.id==null){
             product.id=this.generateId();
            this.products.push(product) //yeni üretilen id ile birlikte listeye ekledik.
        }
        else{
            let index;
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].id===product.id){
                    index=i;
                }
            }
                this.products.splice(index,1,product);
            

        }
            
        
           
    }
    deleteProduct(product: Product): void {
        let index=this.products.indexOf(product); 
        if(index>0){
            this.products.splice(index,1);
        }
    }
    private generateId():number{
        let key=1;
        while(this.getById(key)!=null){ //o id ile ürün oldukça key'i arttır.
            key++;
        }
        return key;
    }
    
}