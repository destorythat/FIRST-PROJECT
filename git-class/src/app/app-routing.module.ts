import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartclassComponent } from './cartclass/cartclass.component';
import { LoginComponent } from './login/login.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'product',component:ProductDisplayComponent},
{path:'cart',component:CartclassComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
