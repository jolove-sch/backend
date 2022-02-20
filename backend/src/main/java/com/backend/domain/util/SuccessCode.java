package com.backend.domain.util;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum SuccessCode {
    //    Auth
    LOGIN_SUCCESS("로그인 성공", 200),
    LOGOUT_SUCCESS("로그아웃 성공", 200),
    REISSUE_SUCCESS("토큰 재발급 성공", 200),

    // Band
    CREATE_BAND_SUCCESS("밴드 등록 성공", 200),
    GET_BAND_STATUS_SUCCESS("밴드 상태 가져오기 성공", 200),

    // Mobile
    CREATE_MOBILE_SUCCESS("모빌 등록 성공", 200),
    GET_MOBILE_URL_SUCCESS("모빌 영상 url 가져오기 성공", 200),
    ;

    private final String message;
    private final int status;
}