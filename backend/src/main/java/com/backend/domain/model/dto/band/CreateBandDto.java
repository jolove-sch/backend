package com.backend.domain.model.dto.band;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class CreateBandDto {
    @NotBlank(message = "email이 누락되었습니다")
    String email;

    @NotBlank(message = "serial 번호가 누락되었습니다")
    String serialNumber;
}
