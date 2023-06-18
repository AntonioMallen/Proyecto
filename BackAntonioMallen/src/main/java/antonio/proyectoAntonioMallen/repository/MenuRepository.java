package antonio.proyectoAntonioMallen.repository;

import antonio.proyectoAntonioMallen.Modelos.Menu;
import antonio.proyectoAntonioMallen.Modelos.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<Menu,Long> {

    @Query(value = "Select m from Menu m where m.nombre = ?1")
    Menu consultarMenu(String nombre);
}
