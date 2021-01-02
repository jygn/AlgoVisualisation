package com.jygncode.algo.controller;

import java.util.List;

import com.jygncode.algo.entity.AlgoInfo;
import com.jygncode.algo.service.AlgoInfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("*")
public class AlgoInfoController {

    @Autowired
    private AlgoInfoService algoInfoService;

    @PostMapping("api/add-algo-info")
    public void addAlgoInfo (@RequestBody AlgoInfo algoInfo) {
        algoInfoService.addAlgoInfo(algoInfo);
    }

    @GetMapping("api/algos-info")
    public List<AlgoInfo> getAlgosInfo() {
        return algoInfoService.getAlgosInfo();
    }


    // public AlgoInfo getAlgoInfoById(@PathVariable long id) {

    // }

    // @PutMapping

    
    // @DeleteMapping
    

    
}
