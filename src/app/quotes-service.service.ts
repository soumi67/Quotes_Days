import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuotesServiceService {

  constructor(private htpp:HttpClient) { }

  getData(){
    let url ="https://quotes.rest/qod";
    return this.htpp.get(url);
  }
}
