import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  public models!: Model[];
  showAdmin: boolean = false;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) 
  { 
    this.showAdmin = localStorage.getItem(environment.roleKey) == environment.role;
    console.log(localStorage.getItem(environment.roleKey));
    console.log(environment.role);
  }

  ngOnInit(): void {
    let url = environment.baseUrl + 'api/Models';
    this.http.get<Model[]>(url).subscribe(result => {
      this.models = result;
    });
  }
}

  export interface Model {
    id: number,
    name: string,
    usage: string,
    categoryId: number,
}


