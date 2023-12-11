import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private products:any;
private itemsBasket: any[] = [];
  constructor(private http: HttpClient) { }

  setProducts(){
    this.http.get('https://fakestoreapi.com/products').subscribe(
      data => {
        this.products = data;
        // console.log(this.products);
    }
    );
  }
  getProducts(){
    return this.products;
  }
  addToBasket(product:any){
    console.log("basket");
    console.log(this.itemsBasket);
    this.itemsBasket.push(product);
  }
  returnItemsBasket(){
    return this.itemsBasket;
  }

  clearBasket(){
    this.itemsBasket = [];
  }

  clearItem(product: any) {
    console.log("basket delete");
    console.log(this.itemsBasket);
    this.itemsBasket = this.itemsBasket.filter(
      item => item !== product);
  }
  
}
