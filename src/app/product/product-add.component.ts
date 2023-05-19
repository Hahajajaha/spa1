import { Component, OnInit } from '@angular/core';
import { Product } from './product.component';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Model } from '../model/model.component';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product?: Product
  form!: FormGroup;
  models!: Model[];
  //id!: number;
  //router: any;
  
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
    this.http.get<Model[]>(environment.baseUrl + 'api/Models').subscribe(result => {
      this.models = result;
  }, error => console.error(error));
    // this.loadData();
  }

  onSubmit(){
    let product = this.product!; //product is not going to be null, so add !
    product = {id:0,
      name:"",
      price:"", 
      purchase_Place:"",
      modelId:0,
      color:"",
    }

    product.id = 0;
    product.name = this.form.controls['name'].value;
    product.price = this.form.controls['price'].value;
    product.purchase_Place = this.form.controls['purchase_Place'].value;
    product.modelId = this.form.controls['modelId'].value; // set as number
    product.color = this.form.controls['color'].value;

    let url = environment.baseUrl + `api/products`;  

    this.http.post<Product>(url, product).subscribe({
      next: ()=>{
        console.log(`New product was saved successfully`);
        this.router.navigate(['/product']);
      }
    }); // put means updating the record, post means creating
  }
}
