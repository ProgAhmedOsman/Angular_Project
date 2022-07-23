import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complet',
  templateUrl: './auto-complet.component.html',
  styleUrls: ['./auto-complet.component.css']
})
export class AutoCompletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options=["Sam","Varun","Jasmine"];

}
