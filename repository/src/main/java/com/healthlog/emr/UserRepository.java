package com.healthlog.emr;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.healthlog.emr.model.User;

public interface UserRepository extends CrudRepository<User, Long>{

	List<User> findByUsername(String username);
	
	User findById(long id);
	
}
