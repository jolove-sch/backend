package com.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BandStatusDto {
    private Long id;
    private String nickname;
    private String heartBeat;
    private String oxygen;
    private String temperature;
    private boolean cry;
    private boolean flipped;
}