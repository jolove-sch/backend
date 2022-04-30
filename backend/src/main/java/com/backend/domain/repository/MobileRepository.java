package com.backend.domain.repository;

import com.backend.domain.model.Member;
import com.backend.domain.model.Mobile;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MobileRepository extends JpaRepository<Mobile, Long> {
    Optional<Mobile> findMobileById(Long id);
    Optional<Mobile> findMobileBySerialNumber(String serialNumber);
    Optional<Mobile> findMobileByMobileOwner(Member mobileOwner);
}
