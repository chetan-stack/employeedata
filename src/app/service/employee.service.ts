import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient,
    ) { }

    getAllData(){
      return this.http.get<any>('https://reqres.in/api/users?page=2');
    }
    
   
}
