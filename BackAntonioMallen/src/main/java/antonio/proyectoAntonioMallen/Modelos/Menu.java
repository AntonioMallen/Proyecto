package antonio.proyectoAntonioMallen.Modelos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="menus")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_menu;
    private String nombre;
    private String precio;
    private ArrayList<String> primeros=new ArrayList<String>();
    private ArrayList<String> segundos=new ArrayList<String>();
    private ArrayList<String> postres=new ArrayList<String>();
}
