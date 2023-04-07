import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  public category: Category = {
    id:"",
    name:"",
    origin_Region:"",
    material:"",
  };
  baseUrl = 'https://localhost:7104/api/'

  constructor(http: HttpClient){  /* it equals to: Animal cat = new Animal to build a new class */
    http.get<Category>(this.baseUrl + 'Categories/3').subscribe(result => {
      this.category = result;
    }, error => console.error(error));
  }
}

  interface Category {
    id: string,
    name: string,
    origin_Region: string,
    material: string,
}