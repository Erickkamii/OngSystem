package com.inter.interdisciplinar.configs;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class SimpleCorsFilters implements jakarta.servlet.Filter {

    // Set the client app URL dynamically from the application.properties file
    @Value("${app.client.url}")
    private String clientAppUrl = "*"; // Default to * (allow all origins) if no URL is configured.

    public SimpleCorsFilters(){
        // Constructor code if necessary
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;

        // Allow CORS for the specified client app URL or "*" for all origins.
        String originHeader = request.getHeader("Origin");
        if (originHeader != null && (originHeader.equals(clientAppUrl) || "*".equals(clientAppUrl))) {
            response.setHeader("Access-Control-Allow-Origin", originHeader);
        } else {
            response.setHeader("Access-Control-Allow-Origin", "*"); // For testing: allows all origins
        }

        // Define allowed HTTP methods
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");

        // Define maximum age of preflight request
        response.setHeader("Access-Control-Max-Age", "3600");

        // Allow all headers by default
        response.setHeader("Access-Control-Allow-Headers", "*");

        // Handle OPTIONS request to comply with CORS preflight
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            chain.doFilter(req, res); // Continue filter chain
        }
    }
}
