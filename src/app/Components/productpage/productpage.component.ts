import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { PipesPipe } from '../pipes.pipe';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent {
  open:boolean=false;
  arrayOfShoes:any;
    datalength:any;
    searchItem='';
    data:any;
    viewdata:any;

    constructor(private service:ServiceService, private router:Router){ }

    ngOnInit(){
   
      this.viewlength()
      
      this.openediter()
        this.service.apicall(this.data).subscribe((data)=>{
          // console.log(data,'data');
            this.arrayOfShoes =data
            console.log(this.arrayOfShoes,'array');

            
        })
    }

    addfavourites(data:any){
  
     this.viewdata =this.service.addproducts(data)
     console.log(this.viewdata,'addfavourites');
     
    }

     viewproducts(datas:any){
     
       this.service.viewproducts(datas);
       this.router.navigateByUrl('details')
     }



     viewlength(){
      this.datalength = this.service.cart
      console.log(this.datalength,'length');
     }
    openediter(){
      this.open = !this.open
    }


}
