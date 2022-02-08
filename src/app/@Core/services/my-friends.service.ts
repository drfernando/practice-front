import { Friend } from './../models/friend.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyFriendsService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  
  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(environment.apiUrl + "/friend", this.httpOptions  )
    .pipe(
      map( friends => { return friends }),
      catchError((err:HttpErrorResponse) =>{
        throw err
      }));   
  }

  updateFriend(friend:Friend):Observable<String>{
    return this.http.put<String>(environment.apiUrl + "/friend/"+ friend.id, friend , this.httpOptions )
    .pipe(
      map( () => { return "Actualizado Con Exito" }),
      catchError((err:HttpErrorResponse) =>{
        throw err
      }));      
  }
}
