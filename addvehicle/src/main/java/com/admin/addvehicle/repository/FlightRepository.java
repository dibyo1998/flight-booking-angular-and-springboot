package com.admin.addvehicle.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.admin.addvehicle.model.FlightDetails;
@Repository
public interface FlightRepository extends JpaRepository<FlightDetails,Long>{
	
	
}
