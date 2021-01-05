package com.jygncode.algo.controller;

import java.util.List;
import java.util.Optional;

import com.jygncode.algo.entity.AlgoInfo;
import com.jygncode.algo.service.AlgoInfoService;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
// @CrossOrigin("*")   // TODO to change...
public class AlgoInfoController {

    @Autowired
    private AlgoInfoService algoInfoService;

    @PostMapping("/add-algo-info")
    public void addAlgoInfo(@RequestBody AlgoInfo algoInfo) {
        algoInfoService.addAlgoInfo(algoInfo);
    }

    @GetMapping("/algos-info")
    public List<AlgoInfo> getAlgosInfo() {
        return algoInfoService.getAlgosInfo();
    }

    @GetMapping("/algos-info/{id}")
    public ResponseEntity<?> getAlgoInfo(@PathVariable Long id) {

        return algoInfoService.getAlgoInfo(id)
                .map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // @PutMapping
    
    @DeleteMapping("/algos-info/{id}")
    public ResponseEntity<?> deleteAlgoInfo(@PathVariable Long id) {
        algoInfoService.deleteAlgoInfo(id);
        return ResponseEntity.ok().build();
    }
    
    
}
