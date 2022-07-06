import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './Shared/Services/auth.service'
import { MovieService } from './Shared/Services/movie.service';
import {movie} from './Shared/Models/movie';
import { state } from '@angular/animations';
import { UserService } from './Shared/Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valid!:any;
  movie:movie[]=[]
  data!:any;
  constructor(public AuthService:AuthService,private route:Router,private userService:UserService){
  }
  title = 'OTTapp';

  logout()
  {
    this.AuthService.logout();
  }
  getWatch()
  {
   this.route.navigate(['/user/home/list/1']).then(() => {
    window.location.reload();
  }) ;
  }
  getWatchLater()
  {
    this.route.navigate(['/user/home/list/2']).then(() => {
      window.location.reload();
    }) ;
  }
  getFavourite()
  {
    this.route.navigate(['/user/home/list/3']).then(() => {
      window.location.reload();
    }) ;
  }
  getPrime()
  {
    const body={
      "IsPrime":true
    }
    this.userService.updateUser(this.AuthService.gettoken(),body)
    .subscribe((data)=>
    {alert("Thankyou for opting prime membership !");
      console.log("existing",data)});
  }
  onFormSubmit(data:any)
  {
    this.route.navigate(['/search/'+data.search]).then(() => {
      window.location.reload();
    }) ;
  }
}
