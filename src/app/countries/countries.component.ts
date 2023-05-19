import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { Country } from './country';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public countries!: Country[];
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let qqq = environment.baseUrl + `api/countries/${idParam}`;  
    if(idParam != null){
      this.http.delete<Country>(qqq).subscribe({
        next: () => {
        console.log(`Country ${idParam} was updated successfully`);
        this.router.navigate(['/countries']);
        }
      });
    }
    let url = environment.baseUrl + 'api/Countries';
    this.http.get<Country[]>(url).subscribe(result => {
      this.countries = result;
    });
  }

}

// loadData(): void{
//   let idParam = this.activatedRoute.snapshot.paramMap.get('id');
//   let url = environment.baseUrl + `api/countries/${idParam}`;  
//   this.http.get<Country>(url).subscribe(result => {
//     this.country = result;
//     this.form.patchValue(this.country);
//   });
// }