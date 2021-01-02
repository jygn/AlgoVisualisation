package com.jygncode.algo;

import com.jygncode.algo.entity.AlgoInfo;
import com.jygncode.algo.repository.AlgoInfoRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AlgoApplication {

    public static void main(String[] args) {
        SpringApplication.run(AlgoApplication.class, args);
    }

    // @Bean
    // CommandLineRunner commandLineRunner(AlgoInfoRepository algoInfoRepository) {
    //     return args -> {
    //         AlgoInfo dijkstra = new AlgoInfo(
    //             "Dijkstra",
    //             "test",
    //             "test");
    //         algoInfoRepository.save(dijkstra);

    //         AlgoInfo bfs = new AlgoInfo(
    //             "BFS",
    //             "test",
    //             "test");
    //         algoInfoRepository.save(bfs);
    //     };
    // }

}
