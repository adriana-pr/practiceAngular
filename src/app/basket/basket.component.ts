import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  items: any[] | any;
  price = 0;
  count = 0;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.items = this.service.returnItemsBasket();
    // this.items = [{ "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    // ];
    this.items.map((item: any) => {
      item["count"] = 1;
      item["changedPrice"] = item.price;
      this.price += item.changedPrice;
    });
  }

  delete(item: any) {
    if(this.items.length==0) this.price = 0;
    this.price -= item.changedPrice;
    this.service.clearItem(item);
    this.items = this.service.returnItemsBasket();
  }

  addCount(item: any) {
    item.count += 1;
    item.changedPrice += item.price;
    this.price += item.price;

  }

reduceCount(item: any){
  if (item.count == 1) return;
  item.count -= 1;
  item.changedPrice -= item.price;
  this.price -= item.price;

}

clearBasket(){
  if(this.items.length==0) return;
  this.price = 0;
  this.items = [];
  this.clearBasket();
}
}

