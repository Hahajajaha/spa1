import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories!: Category[];
  showAdmin: boolean = false;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) 
  { 
    this.showAdmin = localStorage.getItem(environment.roleKey) == environment.role;
    console.log(localStorage.getItem(environment.roleKey));
    console.log(environment.role);
  }

  ngOnInit(): void {
    let url = environment.baseUrl + 'api/Categories';
    this.http.get<Category[]>(url).subscribe(result => {
      this.categories = result;
    });
  }
}

  export interface Category {
    id: number,
    name: string,
    origin_Region: string,
    material: string,
}


// export class CountriesComponent implements OnInit {
//   public countries!: Country[];
//   constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

//   ngOnInit(): void {
//     let idParam = this.activatedRoute.snapshot.paramMap.get('id');
//     let qqq = environment.baseUrl + `api/countries/${idParam}`;  
//     if(idParam != null){
//       this.http.delete<Country>(qqq).subscribe({
//         next: () => {
//         console.log(`Country ${idParam} was updated successfully`);
//         this.router.navigate(['/countries']);
//         }
//       });
//     }
//     let url = environment.baseUrl + 'api/Countries';
//     this.http.get<Country[]>(url).subscribe(result => {
//       this.countries = result;
//     });
//   }

// }