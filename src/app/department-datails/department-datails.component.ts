import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-department-datails',
  templateUrl: './department-datails.component.html',
  styleUrls: ['./department-datails.component.css']
})
export class DepartmentDatailsComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  Id: any;


  ngOnInit(): void {
    //this.Id = this.activatedRoute.snapshot.paramMap.get('Id');
     this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{

      this.Id= param.get('Id');

      
     })
  }
  Next() {
    let xx = parseInt(this.Id) + 1;
    this.route.navigate(["Department", xx]);
  }
  Previous() {
    let xx = parseInt(this.Id) - 1;
    this.route.navigate(["Department", xx]);
  }


}
