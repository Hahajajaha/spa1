import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css']
})
export class CountryAddComponent implements OnInit {
  country?: Country
  form!: FormGroup;
  //id!: number;
  //router: any;
  
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }// need to fix this line May 5


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        iso2: new FormControl(''),
        iso3: new FormControl(''),
      }
    );
    // this.loadData();
  }

  // loadData(): void{
  //   let idParam = this.activatedRoute.snapshot.paramMap.get('id');
  //   let url = environment.baseUrl + `api/countries/${idParam}`;  
  //   this.http.get<Country>(url).subscribe(result => {
  //     this.country = result;
  //     this.form.patchValue(this.country);
  //   });
  // }

  onSubmit(){
    let country = this.country!; //country is not going to be null, so add !
    country = {id:0,
      name:"",
      iso2:"", 
      iso3:"",
    }

    country.id = 0;
    country.name = this.form.controls['name'].value;
    country.iso2 = this.form.controls['iso2'].value;
    country.iso3 = this.form.controls['iso3'].value;

    let url = environment.baseUrl + `api/countries`;  

    this.http.post<Country>(url, country).subscribe({
      next: ()=>{
        console.log(`New country was saved successfully`);
        this.router.navigate(['/countries']);
      }
    }); // put means updating the record, post means creating
  }
}
