import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { CartclassComponent } from './cartclass/cartclass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductDisplayComponent,
    CartclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
