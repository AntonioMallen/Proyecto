package antonio.proyectoAntonioMallen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;

@ComponentScan(basePackages = {"antonio.proyectoAntonioMallen"})
@EntityScan(basePackages =  {"antonio.proyectoAntonioMallen"})
@EnableJpaRepositories(basePackages =  {"antonio.proyectoAntonioMallen"})
@EnableAsync
@SpringBootApplication
public class ProyectoAntonioMallenApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoAntonioMallenApplication.class, args);
	}

}
