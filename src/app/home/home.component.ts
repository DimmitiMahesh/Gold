import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title= 'news';
    public getjsonvalue:any;
    constructor(
      private http:HttpClient
    ){}
    ngOnInit(){
      this.getMethod();
    }
    
    public getMethod(){
      this.http.get("https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7").subscribe((data) => {
        console.log("API Response:", data);
        this.getjsonvalue = data;
      },
      (error) => {
        console.error("API Error:", error);
      });
    }
    
}
