package com.erlandaslisauskas.egzaminas;

import com.erlandaslisauskas.egzaminas.model.ClientType;
import com.erlandaslisauskas.egzaminas.model.enums.EClientType;
import com.erlandaslisauskas.egzaminas.repository.ClientTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@SpringBootApplication
public class EgzaminasApplication implements CommandLineRunner {

    @Autowired
    private ClientTypeRepository clientTypeRepository;

    @Bean
    public Docket swaggerDocket() {
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).select()
                .apis(RequestHandlerSelectors.basePackage("com.erlandaslisauskas")).build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("Baigiamasis Egzaminas").version("0.0.1-SNAPSHOT").build();
    }

    public static void main(String[] args) {
        SpringApplication.run(EgzaminasApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        if(clientTypeRepository.findByName(EClientType.LOYAL).isEmpty()) {
            ClientType clientTypeLoyal = new ClientType(EClientType.LOYAL);
            clientTypeRepository.save(clientTypeLoyal);
        }
        if(clientTypeRepository.findByName(EClientType.STANDARD).isEmpty()) {
            ClientType clientTypeStandard = new ClientType(EClientType.STANDARD);
            clientTypeRepository.save(clientTypeStandard);
        }
    }
}
