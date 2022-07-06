import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Shared/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private AuthService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(data:any)
  {
    data.IsAdmin=false;
    data.IsPrime=false;
    this.AuthService.registerUser(data)
    .subscribe((data) => { 
                      if(data){
                                this.router.navigate(['/login']);
                              }
                      else{
                        alert("Please try again !!");
                          }
            
      });   
  }
}
