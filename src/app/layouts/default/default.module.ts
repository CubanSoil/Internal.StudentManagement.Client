import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatCheckboxModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StudentsComponent } from 'src/app/modules/students/students.component';
import { StudentsService } from 'src/app/services/students.service';
import { AddStudentComponent } from 'src/app/modules/students/add-student/add-student.component';
import { ClassesComponent } from 'src/app/modules/classes/classes.component';
import { ClassesService } from 'src/app/services/classes.service';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from 'src/app/modules/students/edit-student/edit-student.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    StudentsComponent,
    AddStudentComponent,
    ClassesComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    StudentsService,
    ClassesService
  ]
})
export class DefaultModule { }
