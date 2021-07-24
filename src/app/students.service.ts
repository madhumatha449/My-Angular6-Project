import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { getViewData } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpService:HttpClient) {  }

  getData(){
    const url = "https://jsonplaceholder.typicode.com/todos/";
   return this._httpService.get(url);
  }

}
