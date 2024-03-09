import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsData } from '../interfaces/events_data';

const apiSql = 'http://localhost:3000/eventos'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }

  getEvents(): Observable<EventsData[]> {
    let result = this.http.get<EventsData[]>(`${apiSql}`)
    console.log(result)
    return result
  }

  getEventById(event: any):Observable<any> {
    const id = event.id
    return this.http.get<any>(`${apiSql}/${id}`)
  }

  createEvent(event: any): Observable<any> {
    return this.http.post<any>(`${apiSql}`, event)
  }

  deleteEvent(event: any): Observable<any> {
    const id = event.id
    return this.http.delete<any>(`${apiSql}/${id}`)
  }

  updateEvent(id: any, event: any): Observable<any> {
    return this.http.patch<any>(`${apiSql}/${id}`, event)
  }



}
