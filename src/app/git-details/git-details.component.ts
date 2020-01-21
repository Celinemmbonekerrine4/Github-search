import { Component, OnInit, Input } from '@angular/core';
import { GitSearchService } from '../git-search.service';



@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {
  username:any;
  user: any;
  repos: any;

    constructor(private gitsearchService: GitSearchService) { 
      this.gitsearchService.findUser().subscribe(user => {
        console.log(user);
        this.user = user;
      });
    
      this.gitsearchService.findRepos().subscribe(repos =>{
        console.log(repos);
        this.repos = repos;
      });
    }
  
    searchUser(){
      this.gitsearchService.replaceUser(this.username);
  
      this.gitsearchService.findUser().subscribe(user => {
        this.user = user;
      });
      this.gitsearchService.findRepos().subscribe(repos =>{
        this.repos = repos;
      })
  
    }
  
    ngOnInit() {
    }
  
  }

 


