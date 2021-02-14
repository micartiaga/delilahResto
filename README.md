# Delilah Resto - ACAMICA 

### Delilah Resto es una API generada para poder administrar un restaurante. En esta se pueden crear usuarios y admins, administrar el menu y pedidos. 

## Programas y recursos utilizados:


- Node.js
- MySql
- Express
- Jason Web Token
- Sequelize
- Postman para manejo de endpoints y testing
- Git

  NPM PACKAGES: 
  
- Express : Framework that provides an easy-way to handle request and managing routes.
- Sequelize: ORM for MySQL connection and querying.
- nodemon: Used in dev instance for fast server reloading.
- bcrypt: password-hashing function
- mysql2: MySQL client for nodejs. Integrated in Sequelize. 
- jsonwebtoken: Creation and validation of JWT authorization method. 
- dotenv: Used to protect JWT passphrase.
- body-parser : Parse incoming request bodies in a middleware before your handlers. 
- cors: is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Caracteristicas

- Iniciar sesión con token JWT
- Asignación de Roles y permisos
- CRUD de: Usuarios, Ordenes y Productos

## PASOS

### 1 - Crea el servidor


1. Instale [nodejs](https://nodejs.org) o verifique si ya lo tiene instalado en el terminal ingresando el comando
```bash
node --version
```

2. Clone el repositorio. Para este paso es importante instalar [Git](https://git-scm.com/). Luego abra la consola, clone el repositorio e instale las dependencias.

```bash
git clone https://github.com/micartiaga/delilahResto.git
cd delilahResto
npm install
```

3. Ingrese a la carpeta donde se encuentra el repositorio clonado y cree un archivo `.env` . Esto le permitirá configurar la base de datos y el token ingresando contraseñas de forma privada que no quedarán de acceso público. Dentro del archivo agregue estos campos:


```bash
PORT = *por defecto: 3000*

HOST = *127.0.0.1 si se trata del localhost, sino escriba la dirección del host*

USER = *nombre del usuario de la base de datos*

PASS = *contraseña de la base de datos*

SCHEMA = *nombre de la base de datos*

TOKEN = *firma secreta para encriptar el token*

KEY= *contraseña para crear un usuario admin*
```

IMPORTANTE!

- Modificar sólo lo indicado y no el nombre de los campos del .env.
- Ejecutar node generate-secret.js para obtener un string random y completar TOKEN del .env

### 2 - Base de Datos

Puede instalar en su ordenador la base de datos que desee XAMPP, MariaDB, Worbench MySQL de ORACLE o bien en un servidor externo.
Una vez instalada la base y configurado el archivo *.env*, la aplicación creará automáticamente tanto la Base de Datos, como las tablas y sus relaciones.

En caso de ejecutar las Querys del archivo seed también se crearán las tablas y las relaciones, además de los datos necesarios para comenzar a usar la base de datos.

IMPORTANTE!

Es necesario que usted ingrese datos a la base de datos, puede hacerlo a través de POSTMAN con los métodos que figuran más abajo. 
Para crear platos del menu, debe antes crear un usuario admin; y para realizar pedidos, debe antes crear un usuario regular. 

#### ENDPOINTS

Usuarios:

('POST/usuarios/add') Para registrar un usuario. 
('POST/usuarios/addAdmin') Para registrar un usuario admin. Recordá enviar como parámetro en el body la "key" que debe coincidir con KEY del archivo .env 
('GET/usuarios/login') Ingresando username y password una vez registrado, devuelve un token para copiar y pegar en "Authorization", type Bearer Token. 
('GET/usuarios/all') Sólo para admin. Necesita autenticación. Obtiene todos los usuarios registrados. 
('PUT/usuarios/edit') Necesita autenticación. Un usuario puede editar su adress, phone, email y fullname.
('DELETE/usuarios/delete') Necesita autenticación. Un usuario puede eliminarse. 

Productos: Necesita autenticación.

('POST/menu/add') Sólo para admin. Necesita autenticación. Permite ingresar platos al menú. 
('PUT/menu/edit') Sólo para admin. Necesita autenticación. Permite modifiar el precio de un plato. 
('DELETE/menu/delete') Sólo para admin. Necesita autenticación. Permite eliminar platos del menú. 
('GET/menu') Platos y precios del menú. 

Pedidos: Necesita autenticación.

('POST/pedidos/add') Crear un nuevo pedido con platos del menú, ingresando también el método de pago. 
('GET/pedidos/all') Sólo para admin. Devuelve los pedidos realizados.
('GET/pedidos/userOrders') Devuelve los pedidos realizados por un usuario.
('GET/pedidos/details') Devuelve los detalles de un pedido. 
('DELETE/pedidos/delete') Sólo para admin. Elimina/rechaza un pedido.
('PUT/pedidos/update') Sólo para admin. Actualiza el estado del pedido.

#### TABLAS

menu
- id
- meal
- price
- createdAt
- updatedAt

usuarios
- id
- username
- fullname
- email
- phone
- address
- password
- admin
- createdAt
- updatedAt

orders
- id
- paidMethod
- state
- totalPrice
- createdAt
- updatedAt
- UserId

tokens
- id
- token
- createdAt
- updatedAt
- UserId

orders and meals
- createdAt
- updatedAt
- OrderId
- ProductId

### 3 - Inicie el Servidor

Abra la terminal y corra el siguiente comando. No cierre la terminal. Si modifica el archivo y lo guarda el servidor se reinicia automáticamente.

```bash
npm start
```

### 4. ¡La base de datos ya está lista para ser usada!

Puedes usar Postman y los endpoints para testarla, ingresando los campos requeridos a través del body. 
Ejemplo

('POST/usuarios/add') Creando un usuario no admin.

{
"username": "ByALady",
"fullname": "Jane Austen",
"email": "jane.austen@gmail.com",
"phone": 44142083262,
"address": "Winchester Rd, Chawton, Alton GU34 1SD, United Kingdom"
}

















