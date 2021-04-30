import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student';
import { AddStudentComponent } from './add-student/add-student.component';

const ELEMENT_DATA: Student[] = [
  { studentId: 1, name: 'Sabelo', isPresent: false },
  { studentId: 2, name: 'Mabura', isPresent: false },
  { studentId: 3, name: 'Zagaria', isPresent: false },
  { studentId: 4, name: 'Mkhulu', isPresent: false },
  { studentId: 5, name: 'Thukzin', isPresent: false }
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'studentId', 'name', 'action'];
  dataSource = new MatTableDataSource<Student>(ELEMENT_DATA);
  classId: number;

  gg: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  selection = new SelectionModel<Student>(true, []);

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog) {
    this.route.queryParams.subscribe(() => {
      this.classId = this.route.snapshot.params.Id
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  Save() {
    this.selection.selected.forEach(element => {
      element.isPresent = true;
    });

    this.dataSource.data.forEach(element => {
      if (!element.isPresent) {
        this.selection.selected.push(element);
      }
    })

    console.log(this.selection.selected);
    this.selection.clear();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      data: {},
      maxHeight: '100%',
      width: '350px',
      maxWidth: '100%',
      disableClose: false,
      hasBackdrop: true,
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); //this will help reload the Table after adding a studentstudent
    });
  }

  openEditDialog(name:string){
    const dialogRef = this.dialog.open(AddStudentComponent, {
      data: {name:name},
      maxHeight: '100%',
      width: '350px',
      maxWidth: '100%',
      disableClose: false,
      hasBackdrop: true,
      autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); //this will help reload the Table after adding a studentstudent
    });
  }
}
