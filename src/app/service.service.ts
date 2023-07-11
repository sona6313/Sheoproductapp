import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  sheoproducts:any;
  cart:Array<any>=[];
  View:any;
  viewarray:Array<any>=[]

  constructor(private service:HttpClient){

  }

  apicall(data:any){
    return this.service.get('http://localhost:3000/sheoproducts',data)
  }

  
  addproducts(data:any){
    if(this.cart.length == 0){
      this.cart.push(data)
    }else{
      const array = this.cart.filter((item:any)=> item.id == data.id)
      if(array.length == 0){
        this.cart.push(data)
      }else{
        alert("you alredy added")
      }
    }
    console.log(this.cart,'data in cart');
  }


  viewproducts(datas:any){
    this.View = this.cart[datas]
    console.log(this.View,' view ');
  }

  Getview(){
    return this.View;
  }


}
