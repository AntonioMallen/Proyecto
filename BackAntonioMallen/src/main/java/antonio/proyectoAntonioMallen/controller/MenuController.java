package antonio.proyectoAntonioMallen.controller;

import antonio.proyectoAntonioMallen.Modelos.Menu;
import antonio.proyectoAntonioMallen.service.MenuService;
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
@RequestMapping("/menus")
public class MenuController {

    @Autowired
    MenuService menuService;


    @GetMapping("/all")// esto sera la direccion localhost:8080/usuarios/all
    public ResponseEntity consultaReservas(){
        return new ResponseEntity<>(menuService.consultarMenu(), HttpStatus.OK);
    }

    @PostMapping(value = "/add", consumes = "application/json")
    public ResponseEntity<?> anadirReserva(@RequestBody Menu menu){
        return new ResponseEntity<>(menuService.anadirMenu(menu),HttpStatus.OK);
    }

    @PostMapping(value = "/delete", consumes = "application/json")
    public ResponseEntity<?> deleteReserva(@RequestBody Menu menu){
        menuService.eliminarMenu(menu);
        return new ResponseEntity<>("",HttpStatus.OK);
    }

    @PostMapping(value = "/addPlato", consumes = "text/plain")
    public ResponseEntity<?> anadirPlato(@RequestBody String todo){
        String aux[] = todo.split(",");
        return new ResponseEntity<>(menuService.anadirPrimero(aux[1], aux[0], Integer.parseInt(aux[2])),HttpStatus.OK);
    }

    @PostMapping(value = "/deletePlato", consumes = "text/plain")
    public ResponseEntity<?> eliminarPlato(@RequestBody String todo){
        String aux[] = todo.split(",");
        return new ResponseEntity<>(menuService.eliminarPlato(aux[1], aux[0], Integer.parseInt(aux[2])),HttpStatus.OK);
    }

}
