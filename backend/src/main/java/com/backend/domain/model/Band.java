package com.backend.domain.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
public class Band {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "band_id")
    private Member bandOwner;

    @Column(nullable = false)
    private String serialNumber;

//    @Column(nullable = false)
//    private String nickname;
//
//    @Column(nullable = false)
//    private Integer heartRate;
//
//    @Column(nullable = false)
//    private Integer oxygenSaturation;
//
//    @Column(nullable = false)
//    private Integer temperature;
//
//    @Column(nullable = false)
}
