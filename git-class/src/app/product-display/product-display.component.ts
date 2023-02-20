import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent {
 
  shopproduct:any[]=[]

constructor(private  myservice:ServiceService, private route:Router){
      this.shopproduct=this.myservice.allproduct();
}

render(gokul: any){

 this.myservice.render(gokul)

}



viewcart(){

   this.route.navigateByUrl('cart')

}


 getpizza(){

this.shopproduct=this.myservice.getpizza();

  
}

getburger(){
this.shopproduct=this.myservice.getburger();

}

getnuggets(){

this.shopproduct=this.myservice.getnuggets();

}





}
