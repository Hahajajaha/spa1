import { Component } from '@angular/core';
import { environment } from '../environment/environment';
import { Category } from './category.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Responseinfo } from 'src/responseinfo/responseinfo';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent {
  responseinfo?: Responseinfo;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/categories/${idParam}`;  
    if(idParam != null){
      this.http.delete<Responseinfo>(url).subscribe(result => {
        console.log(`Category ${idParam} was updated successfully`);
        this.responseinfo = result;
          if(this.responseinfo.status != 200){
              alert(this.responseinfo.message);
            }
        this.router.navigate(['/category']);
        }
      );
    }

    setTimeout(() => {
      this.router.navigate(['/category']);
    }, 300);
  }
}

