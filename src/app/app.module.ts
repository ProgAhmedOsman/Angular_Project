import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParenttComponent } from './Component InterAction/parentt/parentt.component';
import { ChilddComponent } from './Component InterAction/childd/childd.component';
 
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentDatailsComponent } from './department-datails/department-datails.component';
import { Child1Component } from './Component InterAction/child1/child1.component';
import { Child2Component } from './Component InterAction/child2/child2.component';
import { Child3Component } from './Component InterAction/child3/child3.component';
import { TDFComponent } from './tdf/tdf.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { TypoGraphComponent } from './typo-graph/typo-graph.component';
import { ButtonclassesComponent } from './buttonclasses/buttonclasses.component';
import { IconBadgeComponent } from './icon-badge/icon-badge.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ListandnavlistComponent } from './listandnavlist/listandnavlist.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputsComponent } from './inputs/inputs.component';
import { AutoCompletComponent } from './auto-complet/auto-complet.component';
import { DialogComponent } from './dialog/dialog.component';
import { ValueComponent } from './value/value.component';
 
@NgModule({
  declarations: [		
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    InterpolationComponent,
    ParenttComponent,
    ChilddComponent,
    PageNotFoundComponent,
    EmployeeComponent,
    DepartmentComponent,
    DepartmentDatailsComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    TDFComponent,
    ReactiveformComponent,
    TypoGraphComponent,
    ButtonclassesComponent,
    IconBadgeComponent,
    SideNavComponent,
    ListandnavlistComponent,
    GridlistComponent,
    ExpansionpanelComponent,
    StepperComponent,
    InputsComponent,
    AutoCompletComponent,
    DialogComponent,
      ValueComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
     
  ],
  entryComponents:[DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
