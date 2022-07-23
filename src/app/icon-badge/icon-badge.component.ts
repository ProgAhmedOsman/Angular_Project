import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-badge',
  templateUrl: './icon-badge.component.html',
  styleUrls: ['./icon-badge.component.css']
})
export class IconBadgeComponent implements OnInit {


 public notificationNum =20;
 public spinnerValue =50;
  
  constructor() { }

  ngOnInit(): void {
  }
}
