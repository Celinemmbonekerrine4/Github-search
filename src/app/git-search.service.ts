import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  ApiUrl = environment.ApiUrl;
  private username: string;
  private repo: string;
  
  constructor(private http: HttpClient) {
    console.log("ready");
    this.username = "Celinemmbonekerrine4";
    this.repo = '';
  }
  findUser(): any {
    return this.http.get("http://api.github.com/users/" + this.username + "?access_token=e6f4e70f3e344110e5775d2f9b1aaede7a19addb").pipe((res => res));
  }
  findRepos(): any{
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=e6f4e70f3e344110e5775d2f9b1aaede7a19addb").pipe((res => res));
  }
  
  replaceUser(username: string){
    this.username = username;
  }
  searchUser(username:string){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=e6f4e70f3e344110e5775d2f9b1aaede7a19addb").pipe((res => res));
  }

}
