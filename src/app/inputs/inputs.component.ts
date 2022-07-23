import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor(private SnackBar: MatSnackBar,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  selectedValue1: string;
  selectedValue: string;
  minDate = new Date();
  maxDate = new Date(2022, 6, 8); // 2022-8-8
  //days saturdat=0 
  datefilter(date: any) {
    const day = new Date(date).getDay();
    return day != 6 && day != 5;
  }
  

  openSnackBar(message: string, action: any, className: string) {
    this.SnackBar.open(message, action, { duration: 2000, panelClass: [className] })

  }
opendialog()
{
  let dia=  this.dialog.open(DialogComponent , {data : {name:"Ali"}});
  dia.afterClosed().subscribe(c=> {
    console.log(`
     you click :${c}
    `)
  })
}
  
// openSnackBar(message: string, action: string, className: string) {
  //   this.SnackBar.open(message, action, {
  //     duration: 2000,
  //     panelClass: [className]
  //   });
  // }
}
