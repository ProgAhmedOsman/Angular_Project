import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private route: Router , private http:HttpClient) { }

  Departments: any = [
    { "Name": "angular", "Id": 1 },
    { "Name": "ASP", "Id": 2 },
    { "Name": "react", "Id": 3 },
    { "Name": "MVC", "AgIde": 4 },

  ];

ListDepartments:any;
  
  ngOnInit(): void {
    //this.ListDepartments= 
   this.getDepartments();
  }

  Goto(Id: Number) {
    this.route.navigate(["Department", { Id: Id }]);
  }
getDepartments(){
  this.http.get('https://localhost:44317/api/Departments').subscribe(
    response => {
     this.ListDepartments = response;
    },
    error=>{
console.log(error)
    }    
   
   ) ;
}
}
