package com.admin.addvehicle.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.admin.addvehicle.model.FlightDetails;
import com.admin.addvehicle.service.FlightService;
@RestController
@CrossOrigin("*")
@RequestMapping("/flights")
public class FlightController {
	@Autowired
	private FlightService addFlightService;
	String response;
@PostMapping(value="/addnewFlight")
public String add(@RequestBody FlightDetails details) {
	response=addFlightService.addFlight(details);
	return response;
}
@DeleteMapping(value="/deleteflight/{flightId}")
public String delete(@PathVariable long flightId) {
	response=addFlightService.deleteFlight(flightId);
	return response;
}
@GetMapping(value="/details")
public List<FlightDetails> getAllDetails() {
	return addFlightService.getAllFlight();
}
@GetMapping(value="/edit/{flightId}")
public FlightDetails getDetails(@PathVariable long flightId) {
	return addFlightService.getFlight(flightId);
}
@PutMapping(value="/edit/{flightId}")
public String updateDetails(@PathVariable long flightId,@RequestBody FlightDetails details) {
	return addFlightService.updateFlight(flightId,details);
}
}
