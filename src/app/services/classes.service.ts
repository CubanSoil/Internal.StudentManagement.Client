import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private Url = 'https://studentsapi/v1/classes'

  constructor(private _http: HttpClient) { }

  getClasses(): Observable<Grade[]>{
    const ELEMENT_DATA: Grade[] = [
        { Id: 1, name:'A', count:30},
        { Id: 2, name: 'B', count:25},
        { Id: 3, name: 'C', count:45 },
        { Id: 4, name: 'D',count:20},
        { Id: 5, name: 'E', count:32}
      ];
      return  of( ELEMENT_DATA);
    
    //to do when api is done
    //  return this._http.get<Grade[]>(this.Url );
  }
}