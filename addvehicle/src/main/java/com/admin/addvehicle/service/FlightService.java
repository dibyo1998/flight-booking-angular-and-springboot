package com.admin.addvehicle.service;
import java.util.List;
import java.util.Optional;

import javax.management.AttributeNotFoundException;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.admin.addvehicle.model.FlightDetails;
import com.admin.addvehicle.repository.FlightRepository;
@Service
@Transactional
public class FlightService {
	@Autowired
	private FlightRepository addFlightRepository;
	
	public String addFlight(FlightDetails details) {
		long flightId=details.getFlightId();
		Optional<FlightDetails> flight=addFlightRepository.findById(flightId);
		if(flight.isPresent()==true) {
			return "Flight Id="+flightId+" already exists";
		}
		else if(details.getFlightBookedSeats()>details.getFlightTotalSeats()){
			return "Booked seats should not cross total seats..";
					}
		else {
		addFlightRepository.save(details);
		return "Flight Id="+details.getFlightId()+" has been added successfully";
		}
	}
	public String deleteFlight(long flightId) {
		
		Optional<FlightDetails> flight=addFlightRepository.findById(flightId);
		if(flight.isPresent()==true) {
			
			long id=flightId;
			addFlightRepository.deleteById(flightId);
			return "Flight Id="+id+" has been deleted successfully";
		}
		else {
			return "Id does not exist..";
		}
	}
	public FlightDetails getFlight(long flightId) {
		Optional<FlightDetails> flight=addFlightRepository.findById(flightId);
		if(flight.isPresent()==true) {
			FlightDetails f=flight.get();
			//System.out.println(f.getFlightName());
			return f;
		}
		return null;
}
	public List<FlightDetails> getAllFlight() {
		List<FlightDetails> flightlist=addFlightRepository.findAll();
		return flightlist;
}	
	public String updateFlight(long flightId,FlightDetails details) {
		//long flightId=details.getFlightId();
		Optional<FlightDetails> flight=addFlightRepository.findById(flightId);
		if(flight.isPresent()==true) {
			FlightDetails fd=addFlightRepository.findById(flightId).orElseThrow();
			//System.out.println("id==="+flightId);
			if(details.getFlightArrivalDate()!=null)
			fd.setFlightArrivalDate(details.getFlightArrivalDate());
			if(details.getFlightDepartureDate()!=null)
			fd.setFlightDepartureDate(details.getFlightDepartureDate());
			if(details.getFlightFare()!=null)
			fd.setFlightFare(details.getFlightFare());
			if(details.getFlightBookedSeats()!=null)
			fd.setFlightBookedSeats(details.getFlightBookedSeats());
			//System.out.println(details.getFlightAvailability().toString());
			fd.setFlightAvailability(details.getFlightAvailability());
			addFlightRepository.save(fd);
			return "Flight Id="+flightId+" has been updated successfully";
		}
		else {
			return "Flight Id="+flightId+" does not exist";
		}
	}
}
