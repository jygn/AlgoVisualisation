package com.jygncode.algo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity (name="AlgoInfo") // map java object onto db table (map object attributes onto table columns)
// @Table (    
//     name = "algo_info",
//     uniqueConstraints = {
//         @UniqueConstraint (name = "algo_info_unique", columnNames = "name")
//     }
// )
public class AlgoInfo {

    // @SequenceGenerator(
    //     name = "algo_info_sequence",
    //     sequenceName = "algo_info_sequence",
    //     allocationSize = 1
    // )
    // @GeneratedValue (
    //     strategy = GenerationType.SEQUENCE,
    //     generator = "algo_info_sequence"
    // )
    // @Column ( 
    //     name = "id",
    //     updatable = false
    // )

    @Id
    private Long id;

    // @Column (
    //     name = "name",
    //     nullable = false,
    //     columnDefinition = "TEXT"
    // )
    private String name;

    // @Column (
    //     name = "description"
    // )
    private String description;

    // @Column (
    //     name = "complexity"
    // )
    private String complexity;

    public AlgoInfo() {
    }

    public AlgoInfo(String name, String description, String complexity) {
        this.name = name;
        this.description = description;
        this.complexity = complexity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getComplexity() {
        return complexity;
    }

    public void setComplexity(String complexity) {
        this.complexity = complexity;
    }

    @Override
    public String toString() {
        return "AlgoInfo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", complexity='" + complexity + '\'' +
                '}';
    }

}
