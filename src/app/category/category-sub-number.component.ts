import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-category-sub-number',
  templateUrl: './category-sub-number.component.html',
  styleUrls: ['./category-sub-number.component.css']
})
export class CategorySubNumberComponent {
  public categoryDto!: CategoryDto;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(idParam!=null){
      this.http.get<CategoryDto>(environment.baseUrl + `api/Categories/Category_Model/${idParam}`).subscribe(result => {
          this.categoryDto = result;
      }, error => console.error(error));
    }
  }
}

export interface CategoryDto {
  id: number,
  name: string,
  origin_Region: string,
  material: string,
  modelCount: number,
}

