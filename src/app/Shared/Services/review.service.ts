import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,catchError } from "rxjs/operators"; 
import { review } from '../Models/review';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  model:review[]=[];
  url='https://62b41b3ca36f3a973d2c0305.mockapi.io/reviews';
  constructor(private http:HttpClient,private router:Router) { }

  getAllReviews()
  :Observable<review[]>{
    return this.http.get<review[]>(this.url).
          pipe(map(res => this.model=res as review[])); 
        }

    addReview(data:any)
    {
      return this.http.post<boolean>(this.url,data);
    }

}
