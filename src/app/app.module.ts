import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceService } from './service/service.service';
import { BasketComponent } from './basket/basket.component';
import { ProductComponent } from './product/product.component';

export function loadConfig(service : ServiceService) {
  return()=>{
  service.setProducts();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ElectronicsComponent,
    JeweleryComponent,
    MenClothingComponent,
    WomenClothingComponent,
    FooterComponent,
    BasketComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ServiceService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
