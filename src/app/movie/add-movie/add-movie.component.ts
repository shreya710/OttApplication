import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/Shared/Models/movie';
import {MovieService} from '../../Shared/Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router) { }

  model!:movie;
  ngOnInit(): void {
  }

  onFormSubmit(data:any)
  {
    this.model=data;
    console.log(data);
    this.movieService.addMovie(data)
    .subscribe((data) => { 
                      if(data){
                                this.router.navigate(['/admin']);
                              }
                      else{
                        alert("Please try again !!");
                          }
            
      }); 
  }
}
