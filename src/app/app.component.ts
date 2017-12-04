import { Component } from '@angular/core';
import { Http,Response } from '@angular/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: Http){}

  userName="";
  githubData:any="";

  searchUser(){
  this.http.get("https://api.github.com/users/" + this.userName + "?access_token="+environment.access_token)
  .subscribe(
    (response:Response)=>{
      const userInfo=response.json();
      this.githubData=userInfo;

      console.log(userInfo);
      }
    )
  }
}
