package com.heritagelist.arch_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heritagelist.arch_project.model.Architect;

public interface ArchitechRepository extends JpaRepository<Architect, Long> {
    
}
