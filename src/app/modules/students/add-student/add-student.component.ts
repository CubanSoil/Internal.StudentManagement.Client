import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddStudent } from 'src/app/models/add-student';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  formControl = new FormControl('', [Validators.required]);
  constructor(public dialogRef: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddStudent) { }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    console.log(this.data)
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }
}
