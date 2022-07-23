import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
import { EmployeeService } from 'src/app/Services/employee.service';
import { ChilddComponent } from '../childd/childd.component';


@Component({
  selector: 'app-parentt',
  templateUrl: './parentt.component.html',
  styleUrls: ['./parentt.component.css']
})
export class ParenttComponent implements OnInit {

  constructor(private empService: EmployeeService,
    private routrt: Router,
    private activaterouter: ActivatedRoute
  ) {

  }

  @ViewChild(ChilddComponent) child: ChilddComponent;
  childprop: any;

  ListEmployee: any;
  ngOnInit(): void {
    this.ListEmployee = this.empService.emplist().subscribe(
      empData => {
        this.ListEmployee = empData;
      },
      err => {
        alert(err)

      }
    );
  }
  ngAfterViewInit() {
    this.child.shomessage();
  }

  gotolink(linkto: string) {

    this.routrt.navigate([linkto], { relativeTo: this.activaterouter })

  }

}
