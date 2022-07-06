import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,catchError } from "rxjs/operators"; 
import {user} from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  model!:user;
  url!:any;

  constructor(private http:HttpClient,private router:Router) { }


  loginUser(userName:string,password:string):Observable<user>{
    this.url='https://62b41b3ca36f3a973d2c0305.mockapi.io/Users';
    return this.http.get<user>(this.url).
          pipe(map(res => this.model=res as user)); 
        }

    registerUser(data:user)
    {
      this.url='https://62b41b3ca36f3a973d2c0305.mockapi.io/Users'
     // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
      return this.http.post<boolean>(this.url,data);
    }

    gettoken(){  
      return localStorage.getItem("SessionUser");  
      } 

      logout(){
        localStorage.clear();
        this.router.navigate(['/login']);
      }

}
