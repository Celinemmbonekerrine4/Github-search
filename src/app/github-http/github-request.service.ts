import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  ApiUrl = environment.ApiUrl;
  username: string;
  repo: string;

  constructor(private http: HttpClient) { 
    console.log("ready");
    this.username = "Celinemmbonekerrine4";
    this.repo = '';
  }
  findUser(): any {
    return this.http.get("http://api.github.com/users/" + this.username + "?access_token=f2be356f299b53e4094bcbf06e66c17837159ac7").pipe(res => res);
  }
  findRepos(): any{
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=f2be356f299b53e4094bcbf06e66c17837159ac7").pipe((res => res));
  }
  replaceUser(username: string){
    this.username = username;

  }


}