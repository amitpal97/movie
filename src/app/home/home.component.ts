import { Component, OnInit } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  treandingMovies: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTreandingMovies();

  }
  getTreandingMovies(){
    this.http.get("http:localhost:4200\assets\data\tranding-movies.json").subscribe((movies)=>{});
     this.treandingMovies= this.treandingMovies;
     console.log(this.treandingMovies);
  }

}
