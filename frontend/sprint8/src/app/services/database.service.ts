import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsData } from '../interfaces/events_data';

const apiSql = 'http://localhost:3000/eventos'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventsData[]> {
    let result = this.http.get<EventsData[]>(`${apiSql}`, httpOptions)
    return result
  }

  getEventById(event: any):Observable<any> {
    const id = event
    return this.http.get<any>(`${apiSql}/${id}`, httpOptions)
  }

  createEvent(event: any): Observable<any> {
    return this.http.post<any>(`${apiSql}`, event, httpOptions)
  }

  deleteEvent(event:any): Observable<any> {
    const id = event.id
    return this.http.delete<any>(`${apiSql}/${id}`, httpOptions)
  }

  updateEvent(id: any, event: any): Observable<any> {
    return this.http.put<any>(`${apiSql}/${id}`, event, httpOptions)
  }

}
