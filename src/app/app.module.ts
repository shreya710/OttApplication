import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { MovieComponent } from './movie/movie.component';
import {AuthService} from './Shared/Services/auth.service';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { ShowListComponent } from './movie/show-list/show-list.component';
import { SearchComponent } from './movie/search/search.component';
import { ReviewComponent } from './movie/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    MovieComponent,
    AddMovieComponent,
    MovieDetailComponent,
    ShowListComponent,
    SearchComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
