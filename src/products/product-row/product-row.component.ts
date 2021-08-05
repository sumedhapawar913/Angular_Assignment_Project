import { Component, OnInit,Injectable } from '@angular/core';
import productData from '/src/products/stockProduct.json'; 
import { ChkBoxDataService } from 'src/services/chkboxData.service';


interface Product {  
  category: Number;  
  price: String;  
  stocked: Boolean;  
  name: String;  
}  

@Component({
  selector: 'productRow-comp',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})

export class ProductRowComponent implements OnInit {
  chkVal:boolean;
  products: Product[];
  chkString:string;

  constructor(private chkBoxDataService:ChkBoxDataService){    
    this.products  = productData;  
    this.chkVal=false;
    this.chkString=""
    this.chkBoxDataService.currentMessage.subscribe(chkVal => this.chkVal = chkVal);
    this.chkBoxDataService.currText.subscribe(chkString => this.chkString = chkString);
  }

  ngOnInit(): void {
    //console.log(`chkbox val inside prd row comp OnInit: ${this.chkBoxDataService.sharedChkboxValue}`);
  }
  
  strCompare(searchValue:string,productName:any){
    var hideRow=false;
    
    if(searchValue.toLowerCase()===productName.toLowerCase()){
      hideRow = false;
    }
    else hideRow = true;
    return hideRow;
  }
}
