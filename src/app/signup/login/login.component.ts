import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public myUrl:any;
  public loginName:any;
  public loginPhone:any;
  public isRoute:boolean=false;
  

  constructor(public signupService:SignupService,
    public router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        name: new FormControl(''),
        phone: new FormControl(''),
      }
    );
  }
  public getFormValues()
  {
   return this.loginForm.value;
  }
  public loginPostComponent()
    {
      this.loginName=this.loginForm.get('name')?.value;
      this.loginPhone=this.loginForm.get('phone')?.value;
      const localName=localStorage.getItem("user-name");
      const localPhone=localStorage.getItem("user-phone");
      if((this.loginName==localName) && (this.loginPhone==localPhone))
      {
       
     confirm("You are successfully logged in");
     this.router.navigate(["/user/list"]);
      }
      else{
        confirm("Username and password does not match");
      }
      // this.signupService.signupPost(this.getFormValues()).subscribe(result=>
      //   {
      //     this.loginForm.reset();
  
      //   })
    }
    public cancel()
    {
      this.loginForm.reset();
    }
}
