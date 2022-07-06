import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Shared/Services/movie.service';
import { Router } from '@angular/router';
import { movie } from '../Shared/Models/movie';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router) { }

  movieModel!:movie[];
  deletedMovie!:boolean;
  ngOnInit(): void {
    this.showAll()
  }

  showAll()
  {
    this.movieService.getMovies().subscribe((data)=>this.movieModel=data as movie[]);
  }

  deleteMovie(id:any)
  {
    this.movieService.deleteMovie(id).subscribe((data)=>this.deletedMovie=data as boolean);
    this.showAll();
  }
}
