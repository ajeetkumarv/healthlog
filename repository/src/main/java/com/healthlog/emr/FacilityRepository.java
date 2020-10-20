package com.healthlog.emr;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.healthlog.emr.model.Facility;

public interface FacilityRepository extends CrudRepository<Facility, Long>{

	List<Facility> findByName(String name);
	
	Facility findById(long id);
	
}
