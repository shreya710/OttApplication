import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from 'src/app/Shared/Models/movie';
import {MovieService} from '../../Shared/Services/movie.service';
import {AuthService} from '../../Shared/Services/auth.service'
import { usermovie } from 'src/app/Shared/Models/user-movie';
import { UserService } from 'src/app/Shared/Services/user.service';
import { user } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private userService:UserService,private activatedRoute:ActivatedRoute,private movieService:MovieService,private authService:AuthService) { }

  reviewIndex!:any;
  userModel!:user;
  movieId!:any;
  movieModel!:movie;
  UserId!:any;
  userMovieModel!:usermovie[];
  updModel !: usermovie;
  dataModel:usermovie[]=[];

  ngOnInit(): void {
    this.movieId=Number(this.activatedRoute.snapshot.url[3].path);
    this.UserId=Number(this.authService.gettoken());
    this.userService.getUserInfo(this.UserId).subscribe((data) =>
    {
      this.userModel=data;
    });
    this.showDetails();
    
  }

  showDetails()
  {
    this.movieService.getMovieDetail(this.movieId).subscribe((data)=>this.movieModel=data as movie);
    this.userService.getallInfo(this.UserId).subscribe((data)=>this.userMovieModel=data as usermovie[]);
  }

  getAuthentication()
  {
    return this.authService.gettoken();
  }

  movieWatched()
  {
    for(var i in this.userMovieModel)
    {
      if(this.userMovieModel[i].MovieId==this.movieId)
      {
        this.dataModel.push(this.userMovieModel[i]);
      }
    }
    if(this.dataModel.length!=0)
    {
      alert("Thankyou for watching !!!");
      const body={
        "IsWatched":true
      }
      this.userService.updateMovie(this.userMovieModel[0].Id,body)
      .subscribe((data)=>console.log("existing",data));
    }
    else
    {
      alert("Thankyou for watching !!");
      const body={
        "UserId":this.UserId,
        "MovieId":this.movieId,
        "IsWatched":true,
        "IsFavourite":false,
        "IsWatchLater":false
      }
      this.userService.addRecord(body).
      subscribe((data)=>console.log("new",data));
    }
  }

  movieFavourite()
  {
    for(var i in this.userMovieModel)
    {
      if(this.userMovieModel[i].MovieId==this.movieId)
      {
        this.dataModel.push(this.userMovieModel[i]);
      }
    }
    if(this.dataModel.length!=0)
    {
      alert("Added to Favourites !!");
      const body={
        "IsFavourite":true
      }
      this.userService.updateMovie(this.userMovieModel[0].Id,body)
      .subscribe((data)=>console.log("existing",data));
    }
    else
    {
      alert("Added to Favourites !!");
      const body={
        "UserId":this.UserId,
        "MovieId":this.movieId,
        "IsWatched":false,
        "IsFavourite":true,
        "IsWatchLater":false
      }
      this.userService.addRecord(body).
      subscribe((data)=>console.log("new",data));
    }
  }

  movieWatchLater()
  {
    for(var i in this.userMovieModel)
    {
      if(this.userMovieModel[i].MovieId==this.movieId)
      {
        this.dataModel.push(this.userMovieModel[i]);
      }
    }
    if(this.dataModel.length!=0)
    {
      alert("Added to watch Later !!");
      const body={
        "IsWatchLater":true
      }
      this.userService.updateMovie(this.userMovieModel[0].Id,body)
      .subscribe((data)=>console.log("existing",data));
    }
    else
    {
      alert("Added to watch Later !!");
      const body={
        "UserId":this.UserId,
        "MovieId":this.movieId,
        "IsWatched":false,
        "IsFavourite":false,
        "IsWatchLater":true
      }
      this.userService.addRecord(body).
      subscribe((data)=>console.log("new",data));
    }
  }

  onAddReview(index:any)
  {
    this.reviewIndex=index;
  }
}
