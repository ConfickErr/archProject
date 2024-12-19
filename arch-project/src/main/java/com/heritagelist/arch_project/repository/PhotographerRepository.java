package com.heritagelist.arch_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heritagelist.arch_project.model.Photographer;

public interface PhotographerRepository extends JpaRepository<Photographer, Integer> {
    
}
