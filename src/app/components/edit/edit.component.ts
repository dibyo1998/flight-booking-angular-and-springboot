import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightDetails } from 'src/app/Data/flightDetails';

import { EditService } from 'src/app/services/edit.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  flightinfo:FlightDetails=new FlightDetails();
  selected1:any;
  constructor(private editService:EditService,private route:ActivatedRoute) {}
    message:any;
 
 ngOnInit(): void {
  
  this.route.queryParams.subscribe((params:any)=>{
   this.flightinfo.flightId=params.data;
    
   this.editService.findData(this.flightinfo.flightId).subscribe((response:any)=>this.flightinfo=response);
   
  })
}


 public sendData(value:any){
//this.flightinfo.flightId=value.flightId;
//this.flightinfo.flightName=value.flightName;
//this.flightinfo.flightTotalSeats=value.flightTotalSeats;
this.flightinfo.flightArrivalDate=value.flightArrivalDate;
this.flightinfo.flightDepartureDate=value.flightDepartureDate;
this.flightinfo.flightFare=value.flightFare;
this.flightinfo.flightBookedSeats=value.flightBookedSeats;
this.flightinfo.flightAvailability=value.flightAvailability;
this.editService.editFlight(this.flightinfo.flightId,this.flightinfo).subscribe((data:any)=>this.message=data);
 }
}
