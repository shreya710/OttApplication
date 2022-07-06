import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/Shared/Models/movie';
import { Router } from '@angular/router';
import {MovieService} from '../Shared/Services/movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  advModel!:movie[];
  comedyModel!:movie[];
  fictionalModel!:movie[];
  horrorModel!:movie[];
  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit(): void {
    this.getAdventureMovie();
    this.getComedyMovie();
    this.getFictionalMovie();
    this.getHorrorMovie();
  }

  getAdventureMovie()
  {
    this.movieService.getAdventureMovies().subscribe((data)=>this.advModel=data as movie[]);
  }

  getComedyMovie()
  {
    this.movieService.getComedyMovies().subscribe((data)=>this.comedyModel=data as movie[]);
  }

  getFictionalMovie()
  {
    this.movieService.getFictionalMovies().subscribe((data)=>this.fictionalModel=data as movie[]);
  }

  getHorrorMovie()
  {
    this.movieService.getHorrorMovies().subscribe((data)=>this.horrorModel=data as movie[]);
  }
  
  showDetails(id:any)
  {
    this.router.navigate(['user/home/detail',id]);
  }
}
