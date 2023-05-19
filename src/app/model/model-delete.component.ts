import { Component } from '@angular/core';
import { environment } from '../environment/environment';
import { Model } from './model.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Responseinfo } from 'src/responseinfo/responseinfo';

@Component({
  selector: 'app-model-delete',
  templateUrl: './model-delete.component.html',
  styleUrls: ['./model-delete.component.css']
})
export class ModelDeleteComponent {
  responseinfo?: Responseinfo;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/models/${idParam}`;  
    if(idParam != null){
      this.http.delete<Responseinfo>(url).subscribe(result => {
        console.log(`Model ${idParam} was updated successfully`);
        this.responseinfo = result;
        if(this.responseinfo.status != 200){
            alert(this.responseinfo.message);
          }
        this.router.navigate(['/model']);
        }
      );
    }
    setTimeout(() => {
      this.router.navigate(['/model']);
    }, 300);
  }
}
