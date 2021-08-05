import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FilterableProductTableComponent } from './filterable-product-table/filterable-product-table.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductCategoryRowComponent } from './product-category-row/product-category-row.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ChkBoxDataService } from 'src/services/chkboxData.service';


@NgModule({
  declarations: [
    FilterableProductTableComponent,
    SearchBarComponent,
    ProductTableComponent,
    ProductCategoryRowComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers:[ChkBoxDataService],
  bootstrap: [FilterableProductTableComponent]
})
export class ProductsModule { }
