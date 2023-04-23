# cemas-secretary

https://scontent.fsti4-1.fna.fbcdn.net/v/t39.30808-1/306665553_516440313816231_9108585722110807102_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=w6w4g5sV5gEAX9ZpJfJ&_nc_ht=scontent.fsti4-1.fna&oh=00_AfAZJ5Nl1an_g8xov-Wt0oy2RnUfQyglvdTMh_RNfsTrGg&oe=64499E82
# Secretaría web con Vite y Firebase
Este es un proyecto de secretaría web creado con Vite y Firebase. Esta aplicación permite a los usuarios administradores agregar, editar, ver y borrar datos de los estudiantes, mientras que los usuarios normales solo pueden ver información sobre la aplicación. En caso de que seas un usuario comun y corriente solo podras ver informacion relevante sobre la app y como obtener informacion del Centro Educativo Manuel Acevedo Serrano Fe y Alegria 

# Cómo clonar y correr el proyecto

1 Clona el repositorio en tu máquina local:
git clone https://github.com/tuusuario/tuprojecto.git

2 Navega hasta la carpeta del proyecto
cd tuprojecto

3 Instala las dependencias:
npm install

4 Crea un archivo .env en la raíz del proyecto y agrega tus credenciales de Firebase:
VITE_API_KEY=your-api-key
VITE_AUTH_DOMAIN=your-auth-domain
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-storage-bucket
VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_APP_ID=your-app-id

5 Ejecuta el servidor de desarrollo:
npm run dev

6 Abre tu navegador y ve a 'http://localhost:3000' para ver la aplicación en funcionamiento.

# Funciones de la aplicación
Agregar estudiantes (solo para usuarios administradores).
Editar estudiantes (solo para usuarios administradores).
Ver estudiantes (solo para usuarios administradores y usuarios normales).
Borrar estudiantes (solo para usuarios administradores).



