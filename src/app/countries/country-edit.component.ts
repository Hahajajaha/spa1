import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {
  country?: Country
  form!: FormGroup;
  id!: number;
  router: any;
  
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }// need to fix this line May 5


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        iso2: new FormControl(''),
        iso3: new FormControl(''),
      }
    );
    this.loadData();
  }

  loadData(): void{
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/countries/${idParam}`;  
    this.http.get<Country>(url).subscribe(result => {
      this.country = result;
      this.form.patchValue(this.country);
    });
  }

  onSubmit(){
    let country = this.country!; //country is not going to be null, so add !

    country.name = this.form.controls['name'].value;
    country.iso2 = this.form.controls['iso2'].value;
    country.iso3 = this.form.controls['iso3'].value;

    let url = environment.baseUrl + `api/countries/${country.id}`;  

    this.http.put<Country>(url, country).subscribe({
      next: ()=>{
        console.log('country $(country.id) was updated successfully');
        this.router.navigate(['/countries']);
      }
    }); // put means updating the record, post means creating
  }
}
