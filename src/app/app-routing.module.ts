import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductpageComponent } from './Components/productpage/productpage.component';
import { DetailsproductComponent } from './Components/detailsproduct/detailsproduct.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'productpage',component:ProductpageComponent},
  {path:'details',component:DetailsproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
