import { Component, OnInit } from '@angular/core';
import { Product } from './product.component';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product?: Product
  form!: FormGroup;
  id!: number;

  
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }// need to fix this line May 5


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        price: new FormControl(''),
        purchase_Place: new FormControl(''),
        modelId: new FormControl(''),
        color: new FormControl(''),
      }
    );
    this.loadData();
  }

  
  loadData(): void{
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/products/${idParam}`;  
    this.http.get<Product>(url).subscribe(result => {
      this.product = result;
      this.form.patchValue(this.product);
    });
  }

  onSubmit(){
    let product = this.product!; //product is not going to be null, so add !

    product.name = this.form.controls['name'].value;
    product.price = this.form.controls['price'].value;
    product.purchase_Place = this.form.controls['purchase_Place'].value;
    product.modelId = this.form.controls['modelId'].value; // set as number
    product.color = this.form.controls['color'].value;

    let url = environment.baseUrl + `api/products/${product.id}`;  

    this.http.put<Product>(url, product).subscribe({
      next: ()=>{
        console.log(`product $(product.id) was updated successfully`);
        
      }
    }); // put means updating the record, post means creating
    setTimeout(() => {
      this.router.navigate(['/product']);
    }, 300);
  }
}