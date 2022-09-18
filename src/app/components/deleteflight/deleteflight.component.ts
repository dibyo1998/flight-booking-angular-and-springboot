import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightDetails } from 'src/app/Data/flightDetails';
import { DeleteFlightService } from 'src/app/services/delete-flight.service';
@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {
  message: any;
  constructor(private deleteFlightService:DeleteFlightService,private route:ActivatedRoute,public router:Router ) {}
  fdeleteinfo: FlightDetails=new FlightDetails();
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
     this.fdeleteinfo.flightId=params.data;
     this.deleteFlightService.deleteFlight(this.fdeleteinfo.flightId).subscribe((data: any)=>this.message=data);
     //this.editService.findData(this.flightinfo.flightId).subscribe((response:any)=>this.flightinfo=response);
    })
    this.router.navigate(['/details']);
  }
}