import { Injectable } from '@angular/core';
import { FlightDetails } from '../Data/flightDetails';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddFlightService {
  constructor(private http:HttpClient) {
    
   }
   baseurl='http://localhost:8080/admin/flights/';
  saveFlight(flightinfo:FlightDetails){
    
    return this.http.post(this.baseurl+"addnewFlight",flightinfo,{responseType:'text' as 'json'});
  }
}
