import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  products : any[]|any;
  delete = false;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.products = this.service.getProducts()
      .filter((item: any) =>{
            if (item['category'] == "electronics") {
              item['button'] = 'In the basket';
              return item;
            }
          })
      .map((item: any) => {
        const newItem  = item;
        if (this.service.returnItemsBasket().includes(item)) {
          newItem.button = 'Delete';
          // console.log(newItem);
        }
        return newItem;
      });
  }
}
