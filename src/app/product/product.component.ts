import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products!: Product[];
  showAdmin: boolean = false;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) 
  { 
    this.showAdmin = localStorage.getItem(environment.roleKey) == environment.role;
    console.log(localStorage.getItem(environment.roleKey));
    console.log(environment.role);
  }
  
  ngOnInit(): void {
    let url = environment.baseUrl + 'api/Products';
    this.http.get<Product[]>(url).subscribe(result => {
      this.products = result;
    });
  }
}

  export interface Product {
    id: number,
    name: string,
    price: string,
    purchase_Place: string,
    modelId: number,
    color: string,

}


