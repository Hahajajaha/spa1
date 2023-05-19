import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';

import { CountriesComponent } from './countries/countries.component';
import { CountryPopulationComponent } from './countries/country-population.component';
import { CountryEditComponent } from './countries/country-edit.component';
import { CountryAddComponent } from './countries/country-add.component';

import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './category/category-edit.component';
import { CategoryAddComponent } from './category/category-add.component';
import { CategoryDeleteComponent } from './category/category-delete.component';
import { CategorySubNumberComponent } from './category/category-sub-number.component';

import { ModelComponent } from './model/model.component';
import { ModelEditComponent } from './model/model-edit.component';
import { ModelAddComponent } from './model/model-add.component';
import { ModelDeleteComponent } from './model/model-delete.component';
import { ModelSubNumberComponent } from './model/model-sub-number.component';

import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product/product-edit.component';
import { ProductAddComponent } from './product/product-add.component';
import { ProductDeleteComponent } from './product/product-delete.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },

  { path: 'countries', component: CountriesComponent },
  { path: 'countrypopulation/:id', component: CountryPopulationComponent },
  { path: 'countryedit/:id', component: CountryEditComponent },
  { path: 'countrydelete/:id', component: CountriesComponent },
  { path: 'countryadd', component: CountryAddComponent },
  
  { path: 'category', component: CategoryComponent },
  { path: 'categoryedit/:id', component: CategoryEditComponent },
  { path: 'categorydelete/:id', component: CategoryDeleteComponent },
  { path: 'categoryadd', component: CategoryAddComponent },
  { path: 'categorysubnumber/:id', component: CategorySubNumberComponent},

  { path: 'model', component: ModelComponent },
  { path: 'modeledit/:id', component: ModelEditComponent },
  { path: 'modeldelete/:id', component: ModelDeleteComponent },
  { path: 'modeladd', component: ModelAddComponent },
  { path: 'modelsubnumber/:id', component: ModelSubNumberComponent},

  { path: 'product', component: ProductComponent },
  { path: 'productedit/:id', component: ProductEditComponent },
  { path: 'productdelete/:id', component: ProductDeleteComponent },
  { path: 'productadd', component: ProductAddComponent },

  { path: 'login', component: LoginComponent },
  { path: 'fetch-data', component: FetchDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

