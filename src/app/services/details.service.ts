import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightDetails } from '../Data/flightDetails';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  //constructor() {}
  constructor(public http:HttpClient) {}
  baseurl='http://localhost:8080/admin/flights/';
  public findData():Observable<FlightDetails[]>{
    return this.http.get<FlightDetails[]>(this.baseurl+"details");
  }
  
}
