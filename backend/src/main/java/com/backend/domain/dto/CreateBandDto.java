package com.backend.domain.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateBandDto {

    @NotBlank(message = "email이 누락되었습니다")
    @Email(message = "이메일 형식이 올바르지 않습니다")
    String email;

    @NotBlank(message = "시리얼 번호가 누락되었습니다")
    String serialNumber;

    @NotBlank(message = "닉네임이 누락되었습니다")
    String nickname;
}