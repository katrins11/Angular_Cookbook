import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) { }
  
  saveNewUser(formvalue){
    console.log(formvalue);
    return this.http.post("http://localhost:1982/save-new-user", formvalue, {responseType: 'text'});
  }
  getAllUsers(formvalue){
    this.http.get("http://localhost:1983/all-users");
  }

}