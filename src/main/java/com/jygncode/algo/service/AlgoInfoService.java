package com.jygncode.algo.service;

import java.util.List;
import java.util.Optional;

import com.jygncode.algo.entity.AlgoInfo;
import com.jygncode.algo.repository.AlgoInfoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlgoInfoService {

    @Autowired
    private AlgoInfoRepository algoInfoRepository;

    public void addAlgoInfo (AlgoInfo algoInfo) {
        algoInfoRepository.save(algoInfo);
    }

    public List<AlgoInfo> getAlgosInfo() {
        return algoInfoRepository.findAll();
    }

    public Optional<AlgoInfo> getAlgoInfo(Long id) {
        return algoInfoRepository.findById(id);
    }

    public void deleteAlgoInfo(Long id) {
        algoInfoRepository.deleteById(id);
    }
}
