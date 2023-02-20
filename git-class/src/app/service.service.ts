import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // products: any;

  constructor() { }


  pizzas:any[]=[

  {id:101,image:"/assets/cheese pizza.jpg" ,name:"chicken pizza",description:"cheese.....",rs:500,type:"pizza"},
  {id:102,image:"/assets/chicken pizza.jpg",name:"cheese pizza",description:" Hideing the Core",rs:300,type:"pizza"},
  {id:103,image:"/assets/panner pizza.jpg",name:"panner pizza", description:"Simple bakes more Taste",rs:400,type:"pizza"},

  {id:104, image:"/assets/chicken burger.jpg",name:"classic cheeze burger", description:"carve by us", rs:300, type:"burger"},
  {id:105,image:"/assets/cheesy bacon.jpg",name:" cheesy bacon", description:"made with love",rs:600,type:"burger"},
  {id:106,image:"/assets/gourmet burger.jpg",name:"gourmet burger",description:"new of us...",rs:200,type:"burger"},


  {id:107,image:"/assets/chicken nuggets.jpg",name:"chicken nuggets", description:"wrap with chicken", rs:400,type:"nuggets"},
  {id:108, image:"/assets/veg nuggets.jpg",name:"veg nuggets",description:"veg incredients",rs:200,type:"nuggets"}


    ]

  allproduct(){

    return this.pizzas; 
  }


  getpizza(){

  return this.pizzas.filter(id =>   id.type ==="pizza" );


  }

  getburger(){

 return this.pizzas.filter(id => id.type ==="burger");

  }

  getnuggets(){

return this.pizzas.filter(id =>id.type ==="nuggets");

  }
  


  
  
  //fetched from shop 

  invoc:any[]=[]

render(gokul: any){

   this.invoc.push(gokul);

}

tocart(){

  return this.invoc

}


}
