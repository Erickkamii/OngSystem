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

    @Value("http://localhost:4200")
    private String clientAppUrl = "http://localhost:4200"; // Valor default para todas as origens

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;

        // Verifica a origem do pedido
        String originHeader = request.getHeader("Origin");
        if (originHeader != null && (originHeader.equals(clientAppUrl) || "*".equals(clientAppUrl))) {
            response.setHeader("Access-Control-Allow-Origin", originHeader);
        } else {
            response.setHeader("Access-Control-Allow-Origin", "*"); // Permite todas as origens para testes
        }

        // Permite métodos HTTP comuns
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");

        // Permite cabeçalhos customizados, incluindo o 'Authorization' se necessário
        response.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization, X-Requested-With");

        // Permite o envio de credenciais, se necessário (como tokens de autenticação)
        response.setHeader("Access-Control-Allow-Credentials", "true");

        // Define o tempo máximo que a resposta pode ser armazenada em cache
        response.setHeader("Access-Control-Max-Age", "3600");

        // Caso seja uma requisição OPTIONS (pré-verificação CORS), retorna o status OK
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            chain.doFilter(req, res); // Continua o filtro se não for uma requisição OPTIONS
        }
    }
}
