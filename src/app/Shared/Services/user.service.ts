import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,catchError } from "rxjs/operators"; 
import { usermovie } from '../Models/user-movie';
import { user } from '../Models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  model!:usermovie[];
  Usermodel!:user;
  Uname!:string;
  url='https://62b41b3ca36f3a973d2c0305.mockapi.io/user-movie';
  userUrl='https://62b41b3ca36f3a973d2c0305.mockapi.io/Users';
  constructor(private http:HttpClient,private router:Router) { }

  getUserInfo(id:any)
    :Observable<user>{
      return this.http.get<user>(this.userUrl+'/'+id).
            pipe(map(res => this.Usermodel=res as user));
  }

  getName(id:any)
  {
    this.getUserInfo(id).subscribe((data)=>this.Usermodel=data);
    return this.Usermodel.UserName;
  }

  updateUser(id:any,userModel:any)
  {
    return this.http.put<usermovie>(this.userUrl+'/'+id,userModel);
  }

  getallInfo(userId:number)
  :Observable<usermovie[]>{
    const params = new HttpParams()
   .set('UserId', userId);
    return this.http.get<usermovie[]>(this.url,{params : params}).
          pipe(map(res => this.model=res as usermovie[])); 
        }

  updateMovie(id:any,userMovieModel:any)
  {
    return this.http.put<usermovie>(this.url+'/'+id,userMovieModel);
  }

  addRecord(userMovieModel:any)
  {
    return this.http.post<boolean>(this.url,userMovieModel);
  }

  getWatchedMovie(id:any)
      :Observable<usermovie[]>{
       const params = new HttpParams()
        .set('UserId', id);
        return this.http.get<usermovie[]>(this.url,{params : params})
        .pipe(map(res => this.model=res as usermovie[]));
      }

      getFavouriteMovie(id:any)
      :Observable<usermovie[]>{
       const params = new HttpParams()
        .set('UserId', id);
        return this.http.get<usermovie[]>(this.url,{params : params})
        .pipe(map(res => this.model=res as usermovie[]));
      }
  
      getWatchLater(id:any)
      :Observable<usermovie[]>{
       const params = new HttpParams()
        .set('UserId', id);
        return this.http.get<usermovie[]>(this.url,{params : params})
        .pipe(map(res => this.model=res as usermovie[]));
      }
}
