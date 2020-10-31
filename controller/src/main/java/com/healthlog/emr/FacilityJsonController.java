package com.healthlog.emr;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthlog.emr.model.Facility;

@RestController
@RequestMapping("/facility")
@CrossOrigin(origins = "http://localhost:4200")
public class FacilityJsonController {

	@Autowired
	private FacilityRepository facilityRepository;

	/**
	 * Fetches all facilities
	 * @return
	 */
	@GetMapping(value="/all")
	public List<Facility> getFacilities() {
		return (List<Facility>) facilityRepository.findAll();
	}

	@GetMapping(value="/test")
	public String test() {
		return "json test";
	}
	
	@PostMapping("/create")
	public Facility createFacility(@Valid @RequestBody Facility facility) {
		return facilityRepository.save(facility);
	}

}
