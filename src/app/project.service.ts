import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Project } from './project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'https://hemo7f12.me/backend/read.php';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}`).pipe(
      map((res: any) => {
        return res;
      })
    );}
}
