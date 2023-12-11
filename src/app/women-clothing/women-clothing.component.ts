import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrls: ['./women-clothing.component.css']
})
export class WomenClothingComponent implements OnInit {
  products = [];
  constructor(private service : ServiceService) { }


  ngOnInit(): void {

    this.products = this.service.getProducts()
      .filter((item: any) => {
        if (item['category'] == "women's clothing") {
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
