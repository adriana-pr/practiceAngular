import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent implements OnInit {
  products = [];
  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.products = this.service.getProducts()
      .filter((item: any) => {
        if (item['category'] == "jewelery") {
          item['button'] = 'In the basket';
          return item;
        }
      })
      .map((item: any) => {
        const newItem = item;
        if (this.service.returnItemsBasket().includes(item)) {
          newItem.button = 'Delete';
          // console.log(newItem);
        }
        return newItem;
      });
  }
}

