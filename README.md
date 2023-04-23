# cemas-secretary


# Secretaría web con Vite y Firebase
Este es un proyecto de secretaría web creado con Vite y Firebase. Esta aplicación permite a los usuarios administradores agregar, editar, ver y borrar datos de los estudiantes, mientras que los usuarios normales solo pueden ver información sobre la aplicación. En caso de que seas un usuario comun y corriente solo podras ver informacion relevante sobre la app y como obtener informacion de El #Centro Educativo Manuel Acevedo Serrano Fe y Alegria 

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



