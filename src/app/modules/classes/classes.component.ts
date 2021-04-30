import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Grade } from 'src/app/models/grade';


const ELEMENT_DATA: Grade[] = [
  { Id: 1, name:'A', count:30},
  { Id: 2, name: 'B', count:25},
  { Id: 3, name: 'C', count:45 },
  { Id: 4, name: 'D',count:20},
  { Id: 5, name: 'E', count:32}
];


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})


export class ClassesComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'name', 'count', 'action'];
  dataSource = new MatTableDataSource<Grade>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  // getClasses(){
  //   this.dataSource = new MatTableDataSource<Grade>(ELEMENT_DATA);
  //   this.dataSource.paginator = this.paginator;
  //   this._classesService.getClasses().subscribe((response: any) => {
  //     this.dataSource.data = response;
  //   })
  // }
  
}
