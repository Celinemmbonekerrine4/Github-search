import { Component, OnInit } from '@angular/core';
import {GitSearch} from '../git-search';
import { Router } from '@angular/router';
import {GitSearchService} from '../git-search.service';
import {GithubRequestService} from '../github-http/github-request.service';


@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})

export class GitSearchComponent implements OnInit {

  username:any;
  user: any;
  repos: any;

    constructor(private gitsearchService: GitSearchService, public githubrequestService:GithubRequestService) { 
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

 



