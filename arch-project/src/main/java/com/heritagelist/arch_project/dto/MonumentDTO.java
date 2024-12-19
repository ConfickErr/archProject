package com.heritagelist.arch_project.dto;

import java.util.ArrayList;
import java.util.List;

import com.heritagelist.arch_project.model.Photo;

import lombok.Data;

@Data
public class MonumentDTO {
    private Integer id;
    private String name;
    private String author;
    private String architect;
    private Double area;
    private Integer year;
    private String photograph;
    private String city;
    private String address;
    private List<Photo> images = new ArrayList<>();
}
