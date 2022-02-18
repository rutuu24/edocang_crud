import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://localhost:8081/";

  constructor(private http:HttpClient) { }
    post=(Api:string,data:any)=>{
    this.http.post(this.baseurl+Api,data).subscribe(reply=>{
   return (reply);
    })
      
    }
    get=(Api:string,data:any)=>{
      this.http.post(this.baseurl+Api,data).subscribe(reply=>{
     return (reply);
      })
  
    }
}
