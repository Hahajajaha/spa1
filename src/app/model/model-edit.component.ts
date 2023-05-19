import { Component, OnInit } from '@angular/core';
import { Model } from './model.component';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-model-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.css']
})
export class ModelEditComponent implements OnInit {
  model?: Model
  form!: FormGroup;
  id!: number;

  
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }// need to fix this line May 5


  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl(''),
        usage: new FormControl(''),
      
      }
    );
    this.loadData();
  }

  loadData(): void{
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/models/${idParam}`;  
    this.http.get<Model>(url).subscribe(result => {
      this.model = result;
      this.form.patchValue(this.model);
    });
  }

  onSubmit(){
    let model = this.model!; //model is not going to be null, so add !

    model.name = this.form.controls['name'].value;
    model.usage = this.form.controls['usage'].value;
    // model.categoryId = this.form.controls['categoryId'].value;

    let url = environment.baseUrl + `api/models/${model.id}`;  

    this.http.put<Model>(url, model).subscribe({
      next: ()=>{
        console.log(`model $(model.id) was updated successfully`);
        
      }
    }); // put means updating the record, post means creating
    setTimeout(() => {
      this.router.navigate(['/model']);
    }, 300);
  }
}
