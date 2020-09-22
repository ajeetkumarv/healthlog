package com.healthlog.emr;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.healthlog.emr.model.Patient;

@RestController
@RequestMapping("/jpatient")
public class PatientJsonController {
	
	@Autowired
	private PatientRepository patientRepository;
	
	@GetMapping(value="/{id}")
	public Patient getPatientById(@PathVariable Long id){
		System.out.println("Finding ID: " + id);
		Optional<Patient> pat = patientRepository.findById(id);
		
		return pat.get();
	}
	
	@GetMapping(value="/test")
	public String test() {
		return "json test";
	}
}
