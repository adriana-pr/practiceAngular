import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() item : object|any;
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    // console.log(this.item.title);
  }

  onClick(product:any){

    if(product['button'] == 'In the basket'){
      product['button'] = 'Delete';
      this.service.addToBasket(product);
    }
    else if(product['button'] == 'Delete'){
      product['button'] = 'In the basket';
      this.service.clearItem(product);
    }
  }
}
