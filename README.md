# Proyecto de Página Web Reactiva para 'El Granero'

Este proyecto está dividido en dos partes: el frontend desarrollado con Angular y el backend desarrollado con Java. El objetivo del proyecto es crear una página web reactiva para un bar, donde tanto el menú como los usuarios se almacenan en una base de datos MySQL.

## Características y Tecnologías

### Backend
- **Java**: El lenguaje principal utilizado para desarrollar la lógica de la aplicación del servidor.
- **Spring Boot**: Un framework que facilita la creación de aplicaciones web en Java, proporcionando una estructura sólida y gestionando las interfaces.
- **Hibernate**: Utilizado para la conexión con la base de datos MySQL y la transformación ORM (Object-Relational Mapping), lo que permite manipular datos en la base de datos de manera sencilla a través de objetos Java.
- **Maven**: Una herramienta para la gestión de dependencias y la instalación de paquetes necesarios para el proyecto. Facilita la construcción y el mantenimiento del proyecto, asegurando que todas las dependencias estén en orden.

### Frontend
- **Angular**: El framework principal para el desarrollo del frontend. Angular permite la estructuración y el desarrollo de la interfaz de usuario, facilitando la creación de aplicaciones web robustas y mantenibles.
- **JavaScript**: Utilizado dentro de Angular para desarrollar componentes reactivos, permitiendo la creación de un menú dinámico que puede incrementar o decrementar según los datos almacenados en la base de datos.
- **CSS**: Empleado para definir los estilos visuales de la página web, asegurando una apariencia coherente y atractiva.

## Instalación y Configuración

### Requisitos Previos
- **Java JDK** (versión recomendada: 11 o superior)
- **Maven** (versión recomendada: 3.6.0 o superior)
- **Node.js** (versión recomendada: 14.x o superior)
- **MySQL** (versión recomendada: 8.x)
- **Angular CLI** (versión recomendada: 12.x o superior)

### Clonación del Proyecto
1. Clona el repositorio en tu máquina local:
   git clone https://github.com/AntonioMallen/ProyectoGranero.git
   
   
# Backend - Java

# 1. Abrir el proyecto en IntelliJ IDEA:
#    - Abre IntelliJ IDEA y selecciona "Open" para abrir la carpeta del proyecto clonado.

# 2. Configurar Maven:
#    - IntelliJ detectará automáticamente el archivo pom.xml y configurará Maven. Si no lo hace, asegúrate de que Maven esté 
#      correctamente instalado y configurado.
#    - En la terminal de IntelliJ, navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:
mvn clean install

# 3. Configurar la base de datos MySQL:
#    - Accede al archivo src/main/resources/application.properties y ajusta las propiedades de conexión a la base de datos, 
#      incluyendo el nombre de la base de datos, el usuario y la contraseña.
#    - Asegúrate de que la base de datos esté corriendo y que hayas creado la base de datos necesaria.

# 4. Ejecutar la aplicación:
#    - Puedes ejecutar la aplicación directamente desde IntelliJ IDEA utilizando la configuración de Spring Boot.
#    - Alternativamente, puedes usar Maven para ejecutar la aplicación:
mvn spring-boot:run
   

# Frontend - Angular

# 1. Abrir el proyecto en Visual Studio Code:
#    - Abre Visual Studio Code y selecciona "Open Folder" para abrir la carpeta frontend dentro del proyecto clonado.

# 2. Instalar dependencias con npm:
#    - En la terminal de Visual Studio Code, asegúrate de estar en la carpeta del frontend (cd frontend) y ejecuta:
npm install

# 3. Iniciar el servidor de desarrollo:
#    - Una vez instaladas las dependencias, inicia el servidor de desarrollo de Angular con:
ng serve

#    - Por defecto, la aplicación estará disponible en http://localhost:4200.


## Uso

# Una vez que tanto el frontend como el backend están en funcionamiento, puedes interactuar con la página web a través del 
# navegador. La página permitirá visualizar y gestionar el menú del bar, así como administrar los usuarios registrados en la base de datos.


## Licencia

# Este proyecto está protegido por derechos de autor. No se permite el uso, distribución o modificación del contenido de este 
# proyecto sin la autorización expresa del autor. Para obtener permiso, por favor, contacta a antoniomallen1@gmail.com.