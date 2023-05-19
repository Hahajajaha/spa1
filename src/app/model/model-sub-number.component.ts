import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-model-sub-number',
  templateUrl: './model-sub-number.component.html',
  styleUrls: ['./model-sub-number.component.css']
})
export class ModelSubNumberComponent {
  public modelDto!: ModelDto;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(idParam!=null){
      this.http.get<ModelDto>(environment.baseUrl + `api/Models/Model_Product/${idParam}`).subscribe(result => {
          this.modelDto = result;
      }, error => console.error(error));
    }
  }
}

export interface ModelDto {
  id: number,
  name: string,
  usage: string,
  categoryId: number,
  productCount: number,
}

