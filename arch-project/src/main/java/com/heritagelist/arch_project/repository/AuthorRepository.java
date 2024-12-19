package com.heritagelist.arch_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heritagelist.arch_project.model.Author;

public interface AuthorRepository extends JpaRepository<Author, Long> {
    
}
