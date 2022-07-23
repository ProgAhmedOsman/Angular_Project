import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private Url: string = "/assets/Employee.json";

  emplist(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.Url).pipe(catchError(err=>{

      return throwError (()=>err.message);
    }));
  
  }



}
