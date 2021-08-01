import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public userList:any;
  public showTable:boolean=false;

  constructor(public signupService:SignupService) { }

  ngOnInit(): void {
  }
  public userGet():any
  {
    
    this.signupService.signupGet().subscribe(result=>
      {
        this.userList=result;
        this.showTable=true;

      })
  }

}
