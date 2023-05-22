package antonio.proyectoAntonioMallen.service;

import antonio.proyectoAntonioMallen.Modelos.Usuario;
import antonio.proyectoAntonioMallen.repository.UsuarioRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public List<Usuario> consultarUsuarios(){return usuarioRepository.findAll();}
    public Usuario anadirUsuarios(Usuario usuario){return usuarioRepository.save( usuario);}
    public void eliminarUsuarios(Usuario usuario){usuarioRepository.delete( usuario);}

    public Usuario consultarCorreo(String correo){
        return usuarioRepository.consultarCorreo(correo);
    }

}
