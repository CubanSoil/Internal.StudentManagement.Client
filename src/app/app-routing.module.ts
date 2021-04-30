import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ClassesComponent } from './modules/classes/classes.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StudentsComponent } from './modules/students/students.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'students/:Id',
    component: StudentsComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
