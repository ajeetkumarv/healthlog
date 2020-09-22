package com.healthlog.emr;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.healthlog.emr.model.Patient;

@Controller
@RequestMapping("/patient")
public class PatientController {
	
	@Autowired
	private PatientRepository patientRepository;

	@PostMapping(value="/save")
	public String readerBooks(@RequestParam String firstName, @RequestParam String lastName, Model model) {
		
		Patient pat = new Patient(firstName, lastName);
				
		pat = patientRepository.save(pat);
		System.out.println("Fetched Patient: " + pat);
		model.addAttribute("pat",pat);
		
		return "showpatient";
	}
	
	@GetMapping(value="/{id}")
	public String getPatientById(@PathVariable Long id, Model model){
		System.out.println("Finding ID: " + id);
		Optional<Patient> pat = patientRepository.findById(id);
		
		if (pat.isPresent()) {
			System.out.println("pat ID found: " + pat.get());
			model.addAttribute("pat", pat.get());
		}
		
		return "showpatient";
	}
	
	@GetMapping(value="/test")
	public String test() {
		return "test";
	}
	
}
