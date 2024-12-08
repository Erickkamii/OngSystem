import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,) { }

  registerVolunteer(signupRequestDto:any):Observable<any>{
    return this.http.post(BASIC_URL + "volunteer/sign-up", signupRequestDto);
  }
  registerOng(signupRequestDto:any):Observable<any>{
    return this.http.post(BASIC_URL + "ong/sign-up", signupRequestDto);
  }
}
