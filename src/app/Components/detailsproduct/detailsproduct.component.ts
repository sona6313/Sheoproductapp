import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Shoppingproducts } from 'src/app/new';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent {
   addview:any;
   newarray:any;

   constructor(private service:ServiceService){}

   ngOnIni(){
    this.displayproducts();
   }

   displayproducts(){
    this.addview = this.service.View
    console.log(this.addview,'viewproducts');

    this.newarray= Shoppingproducts;
    console.log(this.newarray);
    
   }

  
    
    
   
}
