package com.backend.domain.util;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum SuccessCode {
    //    Auth
    LOGIN_SUCCESS("login success", 200),
    LOGOUT_SUCCESS("logout success", 200),
    REISSUE_SUCCESS("reissue access token success", 200),
    ;

    private final String message;
    private final int status;
}