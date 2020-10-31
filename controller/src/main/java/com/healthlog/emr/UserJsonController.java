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

import com.healthlog.emr.model.User;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserJsonController {

	@Autowired
	private UserRepository userRepository;

	/**
	 * Fetches all facilities
	 * @return
	 */
	@GetMapping(value="/all")
	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}

	@GetMapping(value="/test")
	public String test() {
		return "json test";
	}
	
	@PostMapping("/create")
	public User createUser(@Valid @RequestBody User user) {
		System.out.println(" >>>>>> " + user.getFacilityId());
		return userRepository.save(user);
	}

}
