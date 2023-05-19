import { Component } from '@angular/core';
import { environment } from '../environment/environment';
import { Product } from './product.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/products/${idParam}`;  
    if(idParam != null){
      this.http.delete<Product>(url).subscribe({
        next: () => {
        console.log(`Product ${idParam} was updated successfully`);
        this.router.navigate(['/product']);
        }
      });
    }

    setTimeout(() => {
      this.router.navigate(['/product']);
    }, 300);
  }

}
