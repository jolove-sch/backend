package com.backend.domain.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class BandStatusDto {
    private int heartBeat;
    private int oxygen;
    private int temperature;
    private boolean cry;
    private boolean flipped;
}
