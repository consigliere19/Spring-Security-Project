package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class TemplateController {

    @GetMapping("")
    public String getIndexView() {
        return "index";
    }

    /*@GetMapping("login")
    public String getLoginView() {
        return "index";
    }*/

    @GetMapping("courses")
    public String getCoursesView() {
        return "courses";
    }
}
