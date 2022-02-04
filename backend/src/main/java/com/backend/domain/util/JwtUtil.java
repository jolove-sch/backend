package com.backend.domain.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.InvalidClaimException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.backend.domain.error.exception.ErrorCode;
import com.backend.domain.service.MemberService;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Getter
@RequiredArgsConstructor
@Component
public class JwtUtil {

    private final String secretKey = "key-DND-team10";
    private final Algorithm ALGORITHM = Algorithm.HMAC512(secretKey);
    private final long AUTH_TIME = 1000 * 60 * 30; // 30min
    private final MemberService memberService;

    public String createAuthToken(String email) {
        Date now = new Date();
        return JWT.create()
                .withIssuedAt(now)
                .withSubject(email)
                .withClaim("iss", "DND-team10")
                .withClaim("token-type", "access-token")
                .withExpiresAt(new Date(now.getTime() + AUTH_TIME))
                .sign(ALGORITHM);
    }

    public String resolveAccessToken(HttpServletRequest request) {
        return request.getHeader("X-AUTH_TOKEN");
    }

    public boolean validateToken(String token) {
        try {
            DecodedJWT verifiedToken = JWT.require(ALGORITHM).build().verify(token);
            return !verifiedToken.getExpiresAt().before(new Date());
        } catch (Exception ex) {
            return false;
        }
    }

    public String setInvalidAuthenticationMessage(String token) {
        try {
            JWT.require(ALGORITHM).build().verify(token);
            return "Unknown error : Should Tell to Backend";
        } catch (AlgorithmMismatchException | InvalidClaimException e) {
            return ErrorCode.UNSUPPORTED_JWT.getMessage();
        } catch (TokenExpiredException e) {
            return ErrorCode.EXPIRED_ACCESS_TOKEN.getMessage();
        } catch (SignatureVerificationException e) {
            return ErrorCode.SIGNATURE_INVALID_JWT.getMessage();
        } catch (IllegalArgumentException e) {
            return ErrorCode.JWT_NOT_FOUND.getMessage();
        }
    }
}