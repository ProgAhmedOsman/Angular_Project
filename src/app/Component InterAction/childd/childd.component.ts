import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childd',
  templateUrl: './childd.component.html',
  styleUrls: ['./childd.component.css']
})
export class ChilddComponent implements OnInit {

  constructor() { }
  @Output() tv = new EventEmitter();


  ngOnInit(): void {
  }
  send() {
    this.tv.emit("hello from child ")
  }
  shomessage()
  {
   console.log("hi from child")
  }
}
