package antonio.proyectoAntonioMallen.Modelos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;

    private String correo;
    private String password;
    @OneToMany
    @JoinColumn(name="id_reserva")
    private Reserva[] reservas;
    private String rol;



}
