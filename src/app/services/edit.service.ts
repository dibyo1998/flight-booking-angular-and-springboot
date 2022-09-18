import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightDetails } from '../Data/flightDetails';


@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(public http:HttpClient) { }
  baseurl='http://localhost:8080/admin/flights/';
  public findData(id: any):Observable<FlightDetails>{
       return this.http.get<FlightDetails>(this.baseurl+"edit/"+id);
    }
  public editFlight(id: any,flightinfo:FlightDetails){
     return this.http.put(this.baseurl+"edit/"+id,flightinfo,{responseType:'text' as 'json'});
  }
} 
  

