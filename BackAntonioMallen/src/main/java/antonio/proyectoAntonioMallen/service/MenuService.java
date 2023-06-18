package antonio.proyectoAntonioMallen.service;

import antonio.proyectoAntonioMallen.Modelos.Menu;
import antonio.proyectoAntonioMallen.Modelos.Reserva;
import antonio.proyectoAntonioMallen.repository.MenuRepository;
import antonio.proyectoAntonioMallen.repository.ReservaRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
@Slf4j
public class MenuService {

    @Autowired
    MenuRepository menuRepository;
    @Autowired
    ReservaRepository reservaRepository;

    public List<Menu> consultarMenu(){return menuRepository.findAll();}

    public Menu anadirMenu(Menu menu) {
        return menuRepository.save(menu);
    }

    /**
     *
     * @param platoComida: Plato a insertar dentro de la base de datos
     * @param id: id del menu donde se quiere insertar
     * @param plato: 0 sera el primero, 1 sera el segundo y 2 sera el postre
     * @return
     */
    public Menu anadirPrimero(String platoComida, String id,int plato) {
        Long aux = Long.parseLong(id);
        Menu menu= menuRepository.getReferenceById(aux);
        ArrayList<String> platos;

        switch (plato) {
            case 0: // Primero

                if(menu.getPrimeros()!=null) {
                    platos=menu.getPrimeros();
                    platos.add(platoComida);
                    menu.setPrimeros(platos);
                }else{
                    platos = new ArrayList<String>();
                    platos.add(platoComida);
                    menu.setPrimeros(platos);
                }

                break;
            case 1: // Segundo
                if(menu.getSegundos()!=null) {
                    platos=menu.getSegundos();
                }else{
                    platos = new ArrayList<String>();
                }
                platos.add(platoComida);
                menu.setSegundos(platos);
                break;
            case 2: // Postre
                if(menu.getPostres()!=null) {
                    platos=menu.getPostres();
                }else{
                    platos = new ArrayList<String>();
                }

                platos.add(platoComida);
                menu.setPostres(platos);
                break;

        }


        return menuRepository.save(menu);
    }

    public Menu eliminarPlato(String platoComida, String id,int plato){
        Long aux = Long.parseLong(id);
        Menu menu= menuRepository.getReferenceById(aux);
        ArrayList<String> platos;

        switch (plato) {
            case 0: // Primero

                if(menu.getPrimeros()!=null) {
                    platos=menu.getPrimeros();
                    platos.remove(platoComida);
                    menu.setPrimeros(platos);
                }

                break;
            case 1: // Segundo
                if(menu.getSegundos()!=null) {
                    platos=menu.getSegundos();
                    platos.remove(platoComida);
                    menu.setSegundos(platos);
                }


                break;
            case 2: // Postre
                if(menu.getPostres()!=null) {
                    platos=menu.getPostres();
                    platos.remove(platoComida);
                    menu.setPostres(platos);
                }


                break;

        }


        return menuRepository.save(menu);
    }

    public Menu consultarMenuNombre(String nombre){return menuRepository.consultarMenu(nombre);}

    public void eliminarMenu(String nombre) {
        if(nombre!=null) {
            Menu menu = menuRepository.consultarMenu(nombre);
            menuRepository.delete(menu);
        }
    }
}
