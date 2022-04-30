package com.backend.domain.repository;

import com.backend.domain.model.Band;

import java.util.List;
import java.util.Optional;

import com.backend.domain.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BandRepository extends JpaRepository<Band, Long> {

    Optional<Band> findBandBySerialNumber(String serialNumber);

    Optional<Band> findBandByBandOwner(Member bandOwner);

    List<Band> findAllByBandOwner(Member bandOwner);
}
