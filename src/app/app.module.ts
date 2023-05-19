import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';

import { CountriesComponent } from './countries/countries.component';
import { CountryPopulationComponent } from './countries/country-population.component';
import { CountryEditComponent } from './countries/country-edit.component';
import { CountryAddComponent } from './countries/country-add.component';

import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './category/category-edit.component';
import { CategoryAddComponent } from './category/category-add.component';
import { CategoryDeleteComponent } from './category/category-delete.component';

import { ModelComponent } from './model/model.component';
import { ModelEditComponent } from './model/model-edit.component';
import { ModelAddComponent } from './model/model-add.component';
import { ModelDeleteComponent } from './model/model-delete.component';

import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product/product-edit.component';
import { ProductAddComponent } from './product/product-add.component';
import { ProductDeleteComponent } from './product/product-delete.component';
import { CategorySubNumberComponent } from './category/category-sub-number.component';
import { ModelSubNumberComponent } from './model/model-sub-number.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavMenuComponent,
    CountriesComponent,
    LoginComponent,
    CountryPopulationComponent,
    CountryEditComponent,
    CountryAddComponent,
    CategoryComponent,
    CategoryEditComponent,
    CategoryAddComponent,
    CategoryDeleteComponent,
    ModelComponent,
    ModelEditComponent,
    ModelAddComponent,
    ModelDeleteComponent,
    ProductComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductDeleteComponent,
    CategorySubNumberComponent,
    ModelSubNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
