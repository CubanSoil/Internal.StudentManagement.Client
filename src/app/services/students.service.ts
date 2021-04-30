import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private Url = 'https://studentsapi/v1/students'

  constructor(private _http: HttpClient) { }

  getStudents(classId: number): Observable<Student[]>{
    return this._http.get<Student[]>(this.Url + {params: new HttpParams().set('classId', classId.toString())})
  }
}
