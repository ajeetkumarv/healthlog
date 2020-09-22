package com.healthlog.emr;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.healthlog.emr.model.Patient;

public interface PatientRepository extends CrudRepository<Patient, Long> {

	List<Patient> findByLastName(String lastName);

	Patient findById(long id);
}