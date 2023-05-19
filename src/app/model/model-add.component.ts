import { Component, OnInit } from '@angular/core';
import { Model } from './model.component';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from '../category/category.component';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {
  model?: Model
  form!: FormGroup;
  categories!: Category[];
  //id!: number;
  //router: any;
  
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }// need to fix this line May 5


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        usage: new FormControl(''),
        categoryId: new FormControl(''),
      }
    );
        this.http.get<Category[]>(environment.baseUrl + 'api/Categories').subscribe(result => {
            this.categories = result;
        }, error => console.error(error));
    // this.loadData();
  }

  onSubmit(){
    let model = this.model!; //model is not going to be null, so add !
    model = {id:0,
      name:"",
      usage:"", 
      categoryId:0,
    }

    model.id = 0;
    model.name = this.form.controls['name'].value;
    model.usage = this.form.controls['usage'].value;
    model.categoryId = this.form.controls['categoryId'].value;

    let url = environment.baseUrl + `api/models`;  

    this.http.post<Model>(url, model).subscribe({
      next: ()=>{
        console.log(`New model was saved successfully`);
        this.router.navigate(['/model']);
      }
    }); // put means updating the record, post means creating
  }
}
