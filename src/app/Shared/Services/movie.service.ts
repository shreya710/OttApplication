import { Injectable } from '@angular/core';
import { movie } from '../Models/movie';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,catchError } from "rxjs/operators"; 
import { usermovie } from '../Models/user-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url='https://62b41b3ca36f3a973d2c0305.mockapi.io/movies';
  model!:any;
  constructor(private http:HttpClient,private router:Router) { }

  addMovie(data:movie)
    {
         return this.http.post<boolean>(this.url,data);
    }

    getMovies()
      :Observable<movie[]>{
        return this.http.get<movie[]>(this.url).
              pipe(map(res => this.model=res as movie[])); 
            }

    deleteMovie(id:number)
    {
      return this.http.delete<boolean>(this.url+'/'+id)
                .pipe(map(res=>res as boolean));
    }
         
    getAdventureMovies()
      :Observable<movie[]>{
        return this.http.get<movie[]>(this.url+'?MovieGenre=Adventure').
              pipe(map(res => this.model=res as movie[])); 
            }

    getComedyMovies()
    :Observable<movie[]>{
      return this.http.get<movie[]>(this.url+'?MovieGenre=Comedy').
            pipe(map(res => this.model=res as movie[])); 
          }

  getFictionalMovies()
  :Observable<movie[]>{
    return this.http.get<movie[]>(this.url+'?MovieGenre=Fictional').
          pipe(map(res => this.model=res as movie[])); 
        }
        
    getHorrorMovies()
    :Observable<movie[]>{
      return this.http.get<movie[]>(this.url+'?MovieGenre=Horror').
            pipe(map(res => this.model=res as movie[])); 
          }

      getMovieDetail(id:number)
      :Observable<movie>{
        return this.http.get<movie>(this.url+'/'+id).
              pipe(map(res => this.model=res as movie)); 

      }

      search(data:any)
      :Observable<movie[]>{
        return this.http.get<movie[]>('https://62b41b3ca36f3a973d2c0305.mockapi.io/movies?filter='+data).
              pipe(map(res => this.model=res as movie[])); 

      }
      
      
}

