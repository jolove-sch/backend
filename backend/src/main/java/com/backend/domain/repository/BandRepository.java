package com.backend.domain.repository;

import com.backend.domain.model.Band;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BandRepository extends JpaRepository<Band, Long> {

    Optional<Band> findBandBySerialNumber(String serialNumber);
}
