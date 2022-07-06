import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from 'src/app/Shared/Models/movie';
import {MovieService} from '../../Shared/Services/movie.service';
import {AuthService} from '../../Shared/Services/auth.service'
import { usermovie } from 'src/app/Shared/Models/user-movie';
import { UserService } from 'src/app/Shared/Services/user.service';
import { user } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private userService:UserService,private authService:AuthService,private route:Router,private activatedRoute:ActivatedRoute,private movieService:MovieService) { }
  movieModel:movie[]=[];
  
  id!:any;
  UserId!:any;
  title!:any;

  movieIdarr:Int32List[]=[];

  ngOnInit(): void {
    this.id=Number(this.activatedRoute.snapshot.url[3].path);
    this.UserId=Number(this.authService.gettoken());
    
    this.getList();
  }

getList()
{
  this.id=Number(this.activatedRoute.snapshot.url[3].path);
  if(this.id==1)
  {
    this.title="Watched shows";
   this.userService.getWatchedMovie(this.UserId).subscribe((result : usermovie[]) => {  
      result.forEach(element => {
        if(element.IsWatched==true)
        {
          this.movieIdarr.push(element.MovieId);
          console.log(element);
        }   
      });
      
      for(var i in this.movieIdarr)
      {
        this.movieService.getMovieDetail(Number(this.movieIdarr[i])).subscribe((data) => {
          console.log(data);
          this.movieModel.push(data);
        });
      }
    });
  }
  else if(this.id==2)
  { 
    this.title="Watch Later shows";
   this.userService.getWatchLater(this.UserId).subscribe((result : usermovie[]) => {  
      result.forEach(element => {
        if(element.IsWatchLater==true)
        {
          this.movieIdarr.push(element.MovieId);
          console.log(element);
        } 
      });
      
      for(var i in this.movieIdarr)
      {
        this.movieService.getMovieDetail(Number(this.movieIdarr[i])).subscribe((data) => {
          console.log(data);
          this.movieModel.push(data);
        });
      }
    }); 
  }
  else if(this.id==3)
  { 
    this.title="Favourite shows";
    this.route.navigate([this.route.url])
   this.userService.getFavouriteMovie(this.UserId).subscribe((result : usermovie[]) => {  
      result.forEach(element => {
        if(element.IsFavourite==true)
        {
          this.movieIdarr.push(element.MovieId);
          console.log(element);
        } 
      });
      
      for(var i in this.movieIdarr)
      {
        this.movieService.getMovieDetail(Number(this.movieIdarr[i])).subscribe((data) => {
          console.log(data);
          this.movieModel.push(data);
        });
      }
    }); 
  }
}

}
