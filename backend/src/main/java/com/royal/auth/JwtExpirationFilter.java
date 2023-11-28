package com.royal.auth;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Configuration
public class JwtExpirationFilter extends OncePerRequestFilter {
    @Value("${jwt.secret-key}")
    private String jwtSigningString;
    private final Key jwtSigningKey = Keys.hmacShaKeyFor(jwtSigningString.getBytes());
    @Override
    protected void doFilterInternal(@NotNull HttpServletRequest request, @NotNull HttpServletResponse response,
                                    @NotNull FilterChain filterChain) throws ServletException, IOException {
        String authorization = request.getHeader("Authorization");
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Please log in before proceeding.");
            return;
        }

        String token = authorization.substring(7);
        try {
            Claims jwt = Jwts.parser()
                    .setSigningKey(jwtSigningKey).build()
                    .parseClaimsJwt(token).getPayload();
            var remembersMe = (boolean)jwt.get("remembers-me");
            Date issuedAt = jwt.getIssuedAt();
            int durationInMinutes = remembersMe ? 2 * 64 : 30;
            Instant expiration = issuedAt.toInstant().plus(durationInMinutes, ChronoUnit.MINUTES);
            Instant now = Instant.now();
            if (now.isAfter(expiration))
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
                        "User session terminated, please log in again.");
        } catch (ExpiredJwtException e) {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED,
                    "Google authorization has expired, please authenticate through Google again.");
        } catch (MalformedJwtException | UnsupportedJwtException | IllegalArgumentException ex) {
            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Supplied JWT token is invalid.");
        }

        filterChain.doFilter(request, response);
    }
}
