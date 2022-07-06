import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/Shared/Services/movie.service';
import { movie } from 'src/app/Shared/Models/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword!:any;
  movies:movie[]=[];
  constructor(private router:Router,private movieService:MovieService,private activatedRoute:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.keyword=this.activatedRoute.snapshot.url[1].path;
   this.getResults(this.keyword);
  }

  getResults(data:any)
  {
    this.movieService.search(data).subscribe((result : movie[]) => {  
      result.forEach(element => {  
          this.movies.push(element);
      })
    })
  }
}
