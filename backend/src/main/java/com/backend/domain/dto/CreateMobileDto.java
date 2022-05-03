package com.backend.domain.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class CreateMobileDto {
    @NotBlank(message = "email이 누락되었습니다")
    @Email(message = "이메일 형식이 올바르지 않습니다")
    String email;

    @NotBlank(message = "serial 번호가 누락되었습니다")
    String serialNumber;
}
