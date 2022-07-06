import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {MovieComponent} from './movie/movie.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {AuthguardGuard} from './Shared/Authentication/auth.guard';
import {AddMovieComponent} from './movie/add-movie/add-movie.component';
import {MovieDetailComponent} from './movie/movie-detail/movie-detail.component';
import {ShowListComponent} from './movie/show-list/show-list.component';
import {SearchComponent} from './movie/search/search.component';
import {ReviewComponent} from './movie/review/review.component';

const routes: Routes = [
  {path:'',component:MovieComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthguardGuard]},
  {path:'admin/addMovie',component:AddMovieComponent,canActivate:[AuthguardGuard]},
  {path:'user',component:MovieComponent,canActivate:[AuthguardGuard]},
  {path:'user/home',component:MovieComponent,canActivate:[AuthguardGuard]},
  {path:'user/home/detail/:id',component:MovieDetailComponent},
  {path:'user/home/list/:id',component:ShowListComponent,canActivate:[AuthguardGuard]},
  {path:'search/:id',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
