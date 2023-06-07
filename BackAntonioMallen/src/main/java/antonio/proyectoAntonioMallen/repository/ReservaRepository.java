package antonio.proyectoAntonioMallen.repository;

import antonio.proyectoAntonioMallen.Modelos.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva,Long> {

    @Query(value = "Select r from Reserva r where r.id_usuario = ?1")
    List<Reserva> consultarReservasId(Double id);

}
