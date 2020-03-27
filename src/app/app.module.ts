import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ServicesComponent } from './services/services.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SlideComponent, ProductComponent, ProductManagerComponent, ServicesComponent, ProductAddComponent, ProductEditComponent, ProductDetailComponent, AboutComponent, NotFoundComponent, HomeComponent, BannerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
