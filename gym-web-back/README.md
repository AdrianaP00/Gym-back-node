# Gym-web-back

Structure of API with Express.js and documentation with Swagger.


## Estructura del Proyecto
gym-back-node
 |__src
    |__api
       |__controllers  #CRUD and definition of endpoints
       |__models       #Schema of objects in api 
       |__routes       #endpoints, authorizations and swagger
       |__middleware   #definition of roles for authorization
       |__seeds        #first data inserted into DB
       |__utils        #db.js,jwt.js,validators.js
  |__index.js          #configuration archive




## Instalación

- Clone this repository: 

        git clone https://github.com/AdrianaP00/Gym-back-node.git

- Inizialize the project: 

        cd gym-web-back
        npm install --save
        npm run start
        
- Go to the browser and use this URL for visualization of documentation: 

        https://gym-back-node.vercel.app/api-doc/


## Imagenes

### Inicio
![Example](gym-back-node/img/1.png)

### Schemas
![Example](gym-back-node/img/2.png)

### LogIn and authorization
![Example](gym-back-node/img/3.png)

### Choose a role end take the token
![Example](gym-back-node/img/5.png)


### Put obtained token in Authorization 
![Example](gym-back-node/img/6.png)


### Let's start using the api!
![Example](gym-back-node/img/7.png)

