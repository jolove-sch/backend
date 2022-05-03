package com.backend.domain.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignDto {

    @NotBlank(message = "이메일이 누락되었습니다")
    @Email(message = "이메일 형식이 올바르지 않습니다")
    private String email;

    @NotBlank(message = "비밀번호가 누락되었습니다")
    private String password;

    @NotBlank(message = "휴대폰 번호가 누락되었습니다")
    @Size(min = 11, max = 11)
    @Pattern(regexp="(^$|[0-9]{11})")
    private String phoneNumber;
}