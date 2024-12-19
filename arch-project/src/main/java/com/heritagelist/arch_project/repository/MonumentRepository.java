package com.heritagelist.arch_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heritagelist.arch_project.model.Monument;

public interface MonumentRepository extends JpaRepository<Monument, Long> {

    
}
