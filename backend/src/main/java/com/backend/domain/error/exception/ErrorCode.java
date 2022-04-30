package com.backend.domain.error.exception;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum ErrorCode {

    // Common
    INVALID_INPUT_VALUE(400, "C001", "입력 값 오류입니다"),
    METHOD_NOT_ALLOWED(405, "C002", "허용되지 않는 api 입니다"),
    ENTITY_NOT_FOUND(400, "C003", "찾을 수 없는 아이템입니다"),
    INTERNAL_SERVER_ERROR(500, "C004", "서버 에러 : 서버 팀에 문의"),
    INVALID_TYPE_VALUE(400, "C005", "타입 오류입니다"),
    HANDLE_ACCESS_DENIED(403, "C006", "접근이 제한되었습니다"),
    SERIAL_NUM_DUPLICATION(400, "C007", "이미 등록되어 있는 제품입니다"),

    // Member
    EMAIL_DUPLICATION(400, "M001", "이미 등록되어 있는 이메일입니다"),
    LOGIN_INPUT_INVALID(400, "M002", "로그인 정보가 일치하지 않습니다"),
    PASSWORD_INVALID(401, "M003", "패스워드가 일치하지 않습니다"),

    // JWT
    EXPIRED_ACCESS_TOKEN(403, "J001", "access 토큰이 만료되었습니다"),
    UNSUPPORTED_JWT(403, "J002", "지원하지 않는 JWT 토큰입니다"),
    SIGNATURE_INVALID_JWT(403, "JOO3", "토큰 Signature 오류"),
    JWT_NOT_FOUND(403, "J004", "Jwt 토큰을 찾을 수 없습니다"),

    // Band
    BAND_NOT_FOUND(400, "B001", "밴드를 찾을 수 없습니다"),

    ;
    private final String code;
    private final String message;
    private final int status;

    ErrorCode(final int status, final String code, final String message) {
        this.status = status;
        this.message = message;
        this.code = code;
    }

    public String getMessage() {
        return this.message;
    }

    public String getCode() {
        return this.code;
    }

    public int getStatus() {
        return this.status;
    }

}