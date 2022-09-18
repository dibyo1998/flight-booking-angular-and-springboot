import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDetails } from 'src/app/Data/flightDetails';
import { DetailsService } from 'src/app/services/details.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
 })
export class DetailsComponent implements OnInit {
  message:any;
  flist:FlightDetails[]=[];
  
//flist:any;
  constructor(private detailsService:DetailsService,public router:Router) { }
  data:any;
  fsearch:any;
  //fsource:any;
  ngOnInit(){
    this.detailsService.findData().subscribe((response:any)=>this.flist=response);
   
  }
 //public flightinfo: FlightDetails=new FlightDetails();
public deleteData(id:any){
 // this.detailsService.findData().subscribe((response:any)=>this.flist=response);
 // this.router.navigate(['/edit'], { queryParams: {data: this.flightinfo.flightId}});
 this.router.navigate(['/deleteflight'], { queryParams: {data: id}});
  }
  public editData(id:any){
    // this.detailsService.findData().subscribe((response:any)=>this.flist=response);
    // this.router.navigate(['/edit'], { queryParams: {data: this.flightinfo.flightId}});
    this.router.navigate(['/edit'], { queryParams: {data: id}});
     }
  public search(){
    if(this.fsearch!=""){  
      
     //this.fnamed=(resp: { flightName: string; })=>{resp.flightName.toLocaleLowerCase().match(this.fname.toLocaleLowerCase())};
      this.flist=this.flist.filter(resp=>{
       var result=resp.flightName.toLocaleLowerCase().match(this.fsearch.toLocaleLowerCase());
       if(result==null){
          result=resp.flightSource.toLocaleLowerCase().match(this.fsearch.toLocaleLowerCase());
          if(result==null){
            result=resp.flightDestination.toLocaleLowerCase().match(this.fsearch.toLocaleLowerCase());
         }
       }
       return result;
    });
    
    } 
  else{
    this.ngOnInit();
  }
}
} 