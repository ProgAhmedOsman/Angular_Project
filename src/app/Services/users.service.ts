import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // getData() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  //     .pipe(
  //       map((response: any[]): any[] => response.map(item => item['name']))
        
  //     )
  // }
}
