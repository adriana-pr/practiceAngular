import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [{path:'', component: WomenClothingComponent},
{path:'women-clothing', component: WomenClothingComponent},
{path:'electronics', component: ElectronicsComponent},
{path:'men-clothing', component: MenClothingComponent},
{path:'jewelery', component: JeweleryComponent},
{path:'basket', component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
