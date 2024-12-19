package com.heritagelist.arch_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heritagelist.arch_project.model.City;

public interface CityRepository extends JpaRepository<City, Long> {
    
}
