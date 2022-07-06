import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../Shared/Services/auth.service';
import {} from '@angular/forms';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { user } from 'src/app/Shared/Models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apiModel!:any;
  formData!:any;
  currentUserId!:any;
  constructor(private AuthService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(data:user)
  {
    this.formData=data; //form data
    this.AuthService.loginUser(data.UserEmailId,data.UserPassword).subscribe((data)=>{
    this.apiModel=data; //api data
    var success=false;
    for(var i in this.apiModel)
      {
        
        if(this.apiModel[i].UserEmailId===this.formData.UserEmailId && this.apiModel[i].UserPassword===this.formData.UserPassword)
          {
            this.currentUserId=this.apiModel[i].UserId;
            localStorage.setItem('SessionUser',this.currentUserId);
            if(this.apiModel[i].IsAdmin===true)
            {
              this.router.navigate(['/admin']);
            }
            else
            {
              this.router.navigate(['/user/home']); 
            }
            success=true;
          }
      }
      if(success==false)
      {
        alert("Email Id or Password incorrect.. Please try again");
      }
  });
  }

}
