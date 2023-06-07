package antonio.proyectoAntonioMallen.service;

import antonio.proyectoAntonioMallen.Modelos.Reserva;
import antonio.proyectoAntonioMallen.Modelos.Usuario;
import antonio.proyectoAntonioMallen.repository.ReservaRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class ReservaService {

    @Autowired
    ReservaRepository reservaRepository;

    public List<Reserva> consultarReservas(){return reservaRepository.findAll();}
    public List<Reserva> consultarReservasID(String id){
        Double aux = Double.parseDouble(id);
        return reservaRepository.consultarReservasId(aux);
    }

    public void eliminarReserva(Reserva reserva){reservaRepository.delete(reserva);}

    public Reserva anadirReserva(Reserva reserva){return reservaRepository.save( reserva);}
}
