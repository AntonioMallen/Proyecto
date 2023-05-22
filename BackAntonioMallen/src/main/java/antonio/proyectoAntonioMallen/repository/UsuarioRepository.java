package antonio.proyectoAntonioMallen.repository;

import antonio.proyectoAntonioMallen.Modelos.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    @Query(value = "Select u from Usuario u where u.correo = ?1")
    Usuario consultarCorreo(String correo);

}
