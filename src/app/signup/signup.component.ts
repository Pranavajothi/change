
import { Component, OnInit,} from '@angular/core';
import {  FormControl, FormGroup,} from '@angular/forms';
import { Router } from '@angular/router';

import { SignupService } from './service/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  public formValues: any;
  public addressForm!: FormGroup;
  public myUrl:any;
  public name:any;
  public phone:any;
  constructor(private signupService:SignupService,
    public router:Router) { }

  ngOnInit(): void {
   
    this.addressForm=new FormGroup(
      {
        address_line1:new FormControl(''),
        address_line2:new FormControl(''),
        address_line3:new FormControl(''),
        phone:new FormControl(''),
      })
    this.signupForm=new FormGroup(
      {
        id: new FormControl(''),
        name: new FormControl(''),
        firstName:new FormControl(''),
        lastName:new FormControl(''),
        dob:new FormControl(''),
        age:new FormControl(''),
        more:this.addressForm
      }
    )
  }
  public getFormValues()
  {
   return this.signupForm.value;
  }
  public signupPostComponent()
    {
      this.name=this.signupForm.get('name')?.value;
      this.phone=this.addressForm.get('phone')?.value;
      localStorage.setItem("user-name",this.name);
      localStorage.setItem("user-phone",this.phone);
      this.signupService.signupPost(this.getFormValues()).subscribe(result=>
        {
          confirm("You have Registerer Successfully");
          this.signupForm.reset();
          this.addressForm.reset();
        })
    }
  public cancel()
    {
      this.signupForm.reset();
      this.addressForm.reset();
    }
}
