import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  baseUrl="http://127.0.0.1:8000/api/";
  token=""

  constructor(public http: HttpClient) { }

  post(url:string, body:object):Observable<any>{
    return this.http.post(this.baseUrl + url, body, {
      // headers: new HttpHeaders({
      //   'Authorization': 'Bearer ' + this.token, 
      // })
    },)
   }
 
   get(url:string):Observable<any>{
     return this.http.get(this.baseUrl + url)
   }
 
 
   put(url:string, body:object):Observable<any>{
     return this.http.put(this.baseUrl + url, body)
   }
 
   delete(url:string):Observable<any>{
     return this.http.delete(this.baseUrl + url)
   }

   processResponse(response:any) {
    if (response.errorStatus != false){
      console.log(response.errorStatus)
      return false;
    }
    else {
      console.log(response.contentData)
      return response.contentData;
    }
  }
   
}
