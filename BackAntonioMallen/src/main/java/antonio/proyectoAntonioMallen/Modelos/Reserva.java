package antonio.proyectoAntonioMallen.Modelos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_reserva;
    private Long id_usuario;
    private Date fechaReserva; // Dia, hora
    private int comensales;
    //@JoinColumn(name="id_menu")
    //@OneToMany(cascade = CascadeType.ALL)
    private int[] id_menu;
    private int[] cantMenu;
}
