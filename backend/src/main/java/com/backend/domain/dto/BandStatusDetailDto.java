package com.backend.domain.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BandStatusDetailDto {
    private List<String> heartBeat;
    private List<String> oxygen;
    private List<String> temperature;
    private boolean cry;
    private boolean flipped;
}