import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  class = true;
  constructor() { }

  ngOnInit(): void {
    this.class = true;
  }
 onClick(){
  this.class = !this.class;
 }
}
