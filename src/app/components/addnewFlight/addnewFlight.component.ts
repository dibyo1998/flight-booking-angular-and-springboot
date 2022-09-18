import { Component, OnInit } from '@angular/core';
import { FlightDetails } from 'src/app/Data/flightDetails';
import { AddFlightService } from 'src/app/services/add-flight.service';

@Component({
  selector: 'app-addnewFlight',
  templateUrl: './addnewFlight.component.html',
  styleUrls: ['./addnewFlight.component.css']
})
export class AddnewComponent implements OnInit {
  public flightinfo: FlightDetails=new FlightDetails();
  value='';
    constructor(private addFlightService:AddFlightService) {}
    
  ngOnInit(): void {
  }
  
  message: any;
  public sendData(value:any)
  { 
    
    this.flightinfo.flightId=value.flightId;
    this.flightinfo.flightName=value.flightName;
    this.flightinfo.flightTotalSeats=value.flightTotalSeats;
    this.flightinfo.flightSource=value.flightSource;
    this.flightinfo.flightDestination=value.flightDestination;
    this.flightinfo.flightArrivalDate=value.flightArrivalDate;
    this.flightinfo.flightDepartureDate=value.flightDepartureDate;
    this.flightinfo.flightFare=value.flightFare;
    this.flightinfo.flightAvailability=value.flightAvailability;
    this.flightinfo.flightBookedSeats=value.flightBookedSeats;
    this.flightinfo.flightLogoUrl=value.flightLogoUrl;
    this.addFlightService.saveFlight(this.flightinfo).subscribe((data)=>this.message=data);
    
  }
}
