import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDetails } from '../Data/flightDetails';

@Injectable({
  providedIn: 'root'
})
export class DeleteFlightService {

  constructor(private http:HttpClient) { }
  baseurl='http://localhost:8080/admin/flights/';
  public deleteFlight(id: any){
     return this.http.delete(this.baseurl+"deleteflight/"+id,{responseType:'text' as 'json'});
  }
}
