import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cartclass',
  templateUrl: './cartclass.component.html',
  styleUrls: ['./cartclass.component.css']
})
export class CartclassComponent {

fromserve:any[]=[]


constructor(private myservice:ServiceService){

this.fromserve=this.myservice.tocart();

}





}
