import { Component } from '@angular/core';
import { ServiceService } from './service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectTest';
  constructor(private service : ServiceService,
    private route:Router) { 
    // this.service.setProducts();
  }
}
