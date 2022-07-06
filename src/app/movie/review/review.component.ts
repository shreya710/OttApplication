import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { review } from 'src/app/Shared/Models/review';
import { AuthService } from 'src/app/Shared/Services/auth.service';
import { ReviewService } from 'src/app/Shared/Services/review.service';
import { UserService } from 'src/app/Shared/Services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router,private reviewService:ReviewService,private authService:AuthService) { }
  UserId!:any;
  Movieid!:any;
  userModel!:any;
  reviewModel:review[]=[];
  addReview!:review;
  userName!:any;
  
  ngOnInit(): void {
    this.UserId=Number(this.authService.gettoken());
    this.Movieid=Number(this.activatedRoute.snapshot.url[3].path);
    this.userName=this.userService.getName(this.UserId);
    console.log(this.userName)
    this.getAll();
  }

  getAll()
  {
    this.reviewService.getAllReviews().subscribe((data)=>
    {
      for(var i in data)
      {
        if(data[i].UserId=this.UserId && data[i].MovieId==this.Movieid)
        {
          this.reviewModel.push(data[i]);
        }
      }
    }
    )
  }

  onFormSubmit(data:any)
  {
    data.UserId=this.UserId;
    data.MovieId=this.Movieid;
    data.UserName=this.userName;
    console.log(data);
    this.reviewService.addReview(data)
    .subscribe((data) => { 
                      if(data){
                        //this.router.navigate(['user/home/detail/'+this.Movieid])
                                window.location.reload();
                              }
                      else{
                        alert("Please try again !!");
                          }
            
      });   
  }
}
