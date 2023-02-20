import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactive!:FormGroup;
email="";
password="";
found:boolean=false;

constructor(private route:Router){}


  ngOnInit(): void {

      this.reactive=new FormGroup({
    email:new  FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
      })
    }

emai=["gokul@gmail","akash@gmail"];
pass=["gokul","akash"]


  root(data:any){
         
     this.email=data.email;
this.password=data.password;
  
  for(let i=0;i<this.emai.length;i++){
                         if(this.emai[i]==this.email && this.pass[i]==this.password){
                         this.found=true;
                           break;
                              }
                          {
                        this.found=false;

                          }
                                      }
  


if(this.found===false){
    alert ('wrong');
    
        }
    
        else{
    
          this.route.navigateByUrl('product');
        }
       

     
    
      }



}
