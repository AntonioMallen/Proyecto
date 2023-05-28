package antonio.proyectoAntonioMallen.controller;

import antonio.proyectoAntonioMallen.Modelos.Usuario;
import antonio.proyectoAntonioMallen.service.UsuarioService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@RestController
@Component
@CrossOrigin(origins = "*")
@Slf4j
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;
    @GetMapping("/all")// esto sera la direccion localhost:8080/usuarios/all
    public ResponseEntity consultarUsuarios(){
        return new ResponseEntity<>(usuarioService.consultarUsuarios(), HttpStatus.OK);
    }
    @PostMapping(value = "/getEmail", consumes = "text/plain")
    public ResponseEntity<?> consultarCorreo(@RequestBody String correo){
        return new ResponseEntity<>(usuarioService.consultarCorreo(correo),HttpStatus.OK);
    }
    @PostMapping(value = "/add", consumes = "application/json")
    public ResponseEntity<?> anadirUsuario(@RequestBody Usuario usuario){
        return new ResponseEntity<>(usuarioService.anadirUsuarios(usuario),HttpStatus.OK);
    }
    @PostMapping(value = "/remove", consumes = "application/json")
    public ResponseEntity<?> eliminarUsuario(@RequestBody Usuario usuario){
        usuarioService.eliminarUsuarios(usuario);
        return new ResponseEntity<>( "",HttpStatus.OK);
    }

}
