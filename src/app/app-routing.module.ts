import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompletComponent } from './auto-complet/auto-complet.component';
import { ButtonclassesComponent } from './buttonclasses/buttonclasses.component';
import { Child1Component } from './Component InterAction/child1/child1.component';
import { Child2Component } from './Component InterAction/child2/child2.component';
import { Child3Component } from './Component InterAction/child3/child3.component';
import { ChilddComponent } from './Component InterAction/childd/childd.component';
import { ParenttComponent } from './Component InterAction/parentt/parentt.component';
import { DepartmentDatailsComponent } from './department-datails/department-datails.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { HomeComponent } from './home/home.component';
import { IconBadgeComponent } from './icon-badge/icon-badge.component';
import { InputsComponent } from './inputs/inputs.component';
import { ListandnavlistComponent } from './listandnavlist/listandnavlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StepperComponent } from './stepper/stepper.component';
import { TypoGraphComponent } from './typo-graph/typo-graph.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },

  { path: "iconbadge", component: IconBadgeComponent },
  { path: "typograph", component: TypoGraphComponent },
  { path: "button", component: ButtonclassesComponent },
  { path: "Listandnavlist", component: ListandnavlistComponent },
  { path:"Gridlist" ,component:GridlistComponent},
  { path:"Expansionpanel" ,component:ExpansionpanelComponent},
  { path:"Stepper" ,component:StepperComponent},
  { path:"Inputs" ,component:InputsComponent},
  { path:"AutoComplet" ,component:AutoCompletComponent},


  { path: "Employee", component: EmployeeComponent },
  { path: "Departments", component: DepartmentComponent },
  { path: "Department", component: DepartmentDatailsComponent },

  {
    path: "pp", component: ParenttComponent, children: [
      { path: "Child1", component: Child1Component },
      { path: "Child2", component: Child2Component },
      { path: "Child3", component: Child3Component }
    ]
  },
  { path: "cc", component: ChilddComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
