import { Component } from '@angular/core';  
import productData from '/src/products/stockProduct.json'; 
    
interface Product {  
    category: Number;  
    price: String;  
    stocked: String;  
    name: String;  
}  
    
@Component({
    selector: 'productCategoryRow-comp',
    templateUrl: './product-category-row.component.html',
    styleUrls: ['./product-category-row.component.css']
})

export class ProductCategoryRowComponent  {  
  //name = 'Angular'; 
  products: Product[]
 constructor(){
    this.products  = productData;  
    console.log(this.products);
 }
 //products: Product[] = productData; 
  //console.log();
}  