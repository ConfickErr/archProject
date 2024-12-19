package com.heritagelist.arch_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heritagelist.arch_project.model.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
    
}
