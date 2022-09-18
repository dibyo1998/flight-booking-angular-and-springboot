package com.admin.addvehicle.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class FlightDetails {
	    @Id
	    private Long flightId;
	    private String flightName;
	    private String flightSource;
	    private String flightDestination;
	    private Timestamp flightDepartureDate;
	    private Timestamp flightArrivalDate;
	    private Float flightFare;
	    private Boolean flightAvailability;
	    private Integer flightTotalSeats ;
	    private Integer flightBookedSeats;
	    private String flightLogoUrl;
		public Long getFlightId() {
			return flightId;
		}
		public void setFlightId(Long flightId) {
			this.flightId = flightId;
		}
		public String getFlightName() {
			return flightName;
		}
		public void setFlightName(String flightName) {
			this.flightName = flightName;
		}
		public String getFlightSource() {
			return flightSource;
		}
		public void setFlightSource(String flightSource) {
			this.flightSource = flightSource;
		}
		public String getFlightDestination() {
			return flightDestination;
		}
		public void setFlightDestination(String flightDestination) {
			this.flightDestination = flightDestination;
		}
		public Timestamp getFlightDepartureDate() {
			return flightDepartureDate;
		}
		public void setFlightDepartureDate(Timestamp flightDepartureDate) {
			this.flightDepartureDate = flightDepartureDate;
		}
		public Timestamp getFlightArrivalDate() {
			return flightArrivalDate;
		}
		public void setFlightArrivalDate(Timestamp flightArrivalDate) {
			this.flightArrivalDate = flightArrivalDate;
		}
		public Float getFlightFare() {
			return flightFare;
		}
		public void setFlightFare(Float flightFare) {
			this.flightFare = flightFare;
		}
		public Boolean getFlightAvailability() {
			return flightAvailability;
		}
		public void setFlightAvailability(Boolean flightAvailability) {
			this.flightAvailability = flightAvailability;
		}
		public Integer getFlightTotalSeats() {
			return flightTotalSeats;
		}
		public void setFlightTotalSeats(Integer flightTotalSeats) {
			this.flightTotalSeats = flightTotalSeats;
		}
		public Integer getFlightBookedSeats() {
			return flightBookedSeats;
		}
		public void setFlightBookedSeats(Integer flightBookedSeats) {
			this.flightBookedSeats = flightBookedSeats;
		}
		public String getFlightLogoUrl() {
			return flightLogoUrl;
		}
		public void setFlightLogoUrl(String flightLogoUrl) {
			this.flightLogoUrl = flightLogoUrl;
		}
		
}
