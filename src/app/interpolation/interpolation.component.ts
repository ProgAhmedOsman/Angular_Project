import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }
  car:string = "Z";
   nmvx =6;
   isActive:boolean = true;
   url:string = window.location.href ;
  // arr [] ;
   arr =[4,5,6] 

  ngOnInit(): void {
  }

  Print(name:any) {
   console.log(name)
}

}
