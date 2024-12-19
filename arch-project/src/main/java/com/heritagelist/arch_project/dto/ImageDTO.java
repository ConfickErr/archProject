package com.heritagelist.arch_project.dto;

import com.heritagelist.arch_project.model.Monument;
import lombok.Data;

@Data
public class ImageDTO {

    private Integer id;
    private String url;
    private Monument monument;
}
