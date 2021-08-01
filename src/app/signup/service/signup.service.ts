import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public headers = { 'content-type': 'application/json'}
  constructor(public httpClient: HttpClient,
    ) {
   }
   public signupPost(formValue:any)
   {
    return this.httpClient.post('http://localhost:3000/signup',formValue,{headers:this.headers})
   }

   public signupGet()
   {
     return this.httpClient.get('http://localhost:3000/signup');
   }
}
