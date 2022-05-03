package com.backend.domain.service;

import com.backend.domain.dto.AddStatusDto;
import com.backend.domain.model.Band;
import com.backend.domain.dto.ResponseDto;
import com.backend.domain.dto.CreateBandDto;
import com.backend.domain.model.Member;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BandService {

    public void serialNumberDuplicationCheck(String serialNumber);
    public Band findBandBySerialNumber(String serialNumber);
    public Band findBandByBandOwner(Member member);
    public List<Band> findBandListByBandOwner(Member member);
    public ResponseEntity<ResponseDto> getBandListByMember(Member member);
    public ResponseEntity<ResponseDto> createBand(CreateBandDto createBandDto, Member member);
    public ResponseEntity<ResponseDto> getBandStatus(Member member);
    public void addBandStatus(AddStatusDto addStatusDto, int kind);
    public void changeCryStatus(String serialNumber);
    public void changeFlipStatus(String serialNumber);
}
