import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddStudent } from 'src/app/models/add-student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  formControl = new FormControl('', [Validators.required]);
  constructor(public dialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddStudent) { }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit() {
    console.log(this.data)
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }
}
