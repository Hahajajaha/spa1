import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { CategoryComponent } from './category/category.component';
import { ModelComponent } from './model/model.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'teams', component: TeamsComponent},
  { path: 'groups', component: GroupsComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'model', component: ModelComponent},
  { path: 'product', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
