import { Component, OnInit } from '@angular/core';
import { Category } from './category.component';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  category?: Category
  form!: FormGroup;
  //id!: number;
  //router: any;
  
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }// need to fix this line May 5


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        origin_Region: new FormControl(''),
        material: new FormControl(''),
      }
    );
    // this.loadData();
  }

  // loadData(): void{
  //   let idParam = this.activatedRoute.snapshot.paramMap.get('id');
  //   let url = environment.baseUrl + `api/categories/${idParam}`;  
  //   this.http.get<Category>(url).subscribe(result => {
  //     this.category = result;
  //     this.form.patchValue(this.category);
  //   });
  // }

  onSubmit(){
    let category = this.category!; //category is not going to be null, so add !
    category = {id:0,
      name:"",
      origin_Region:"", 
      material:"",
    }

    category.id = 0;
    category.name = this.form.controls['name'].value;
    category.origin_Region = this.form.controls['origin_Region'].value;
    category.material = this.form.controls['material'].value;

    let url = environment.baseUrl + `api/categories`;  

    this.http.post<Category>(url, category).subscribe({
      next: ()=>{
        console.log(`New category was saved successfully`);
        this.router.navigate(['/category']);
      }
    }); // put means updating the record, post means creating
  }
}
