package antonio.proyectoAntonioMallen.controller;

import antonio.proyectoAntonioMallen.Modelos.Reserva;
import antonio.proyectoAntonioMallen.Modelos.Usuario;
import antonio.proyectoAntonioMallen.service.ReservaService;
import antonio.proyectoAntonioMallen.service.UsuarioService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@RestController
@Component
@CrossOrigin(origins = "*")
@Slf4j
@RequestMapping("/reservas")
public class ReservaController {

    @Autowired
    ReservaService reservaService;


    @GetMapping("/all")// esto sera la direccion localhost:8080/usuarios/all
    public ResponseEntity consultaReservas(){
        return new ResponseEntity<>(reservaService.consultarReservas(), HttpStatus.OK);
    }

    @PostMapping(value = "/add", consumes = "application/json")
    public ResponseEntity<?> anadirReserva(@RequestBody Reserva reserva){
        return new ResponseEntity<>(reservaService.anadirReserva(reserva),HttpStatus.OK);
    }

    @PostMapping(value = "/getReservasID", consumes = "text/plain")
    public ResponseEntity<?> anadirReserva(@RequestBody String ID){
        return new ResponseEntity<>(reservaService.consultarReservasID(ID),HttpStatus.OK);
    }
    @PostMapping(value = "/remove", consumes = "application/json")
    public ResponseEntity<?> eliminarUsuario(@RequestBody Reserva reserva){
        reservaService.eliminarReserva(reserva);
        return new ResponseEntity<>( "",HttpStatus.OK);
    }
}
