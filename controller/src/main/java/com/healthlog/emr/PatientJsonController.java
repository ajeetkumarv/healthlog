package com.healthlog.emr;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthlog.emr.model.Patient;

@RestController
@RequestMapping("/api/v1")
//@CrossOrigin(origins = "http://localhost:4200")
public class PatientJsonController {
	
	@Autowired
	private PatientRepository patientRepository;
	
	@GetMapping(value="/patients/{id}")
	public Patient getPatientById(@PathVariable Long id){
		System.out.println("Finding ID: " + id);
		Optional<Patient> pat = patientRepository.findById(id);
		
		return pat.get();
	}
	
	@GetMapping("/patients")
	public List<Patient> getAllPatients() {
		return (List<Patient>) patientRepository.findAll();
	}
	
	@GetMapping(value="/test")
	public String test() {
		return "json test";
	}
	
	@PostMapping("/patients")
	public Patient createPatient(@Valid @RequestBody Patient patient) {
		return patientRepository.save(patient);
	}
}
