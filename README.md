# Resume Generator
Hello There!!

## About
A dockerized web app built using MERN stack and Material-UI wherein users can register, sign-in, provide the required information, preview and download a professional-looking resume in a few quick and easy steps. Click the below link to view the app:

https://build-your-resume.herokuapp.com/

## Steps to Run the App
Begin by forking and cloning the repo followed by cd-ing into the root of the project. Then run either of the below 2 code cells:

### i) With Docker
```
//'sudo' before the docker commands may or may not be needed
(sudo) dockerd  // Run this only if docker daemon is not up and running yet

(sudo) docker-compose build
(sudo) docker-compose up

(sudo) docker-compose down  // Run this only if you wanna stop the app
```

[OR]

### ii) Without Docker

In one terminal:
```
cd server
npm start
```

In another terminal:
```
cd client
npm start
```

[END]

In either case, to view the app, go to the below URL:
```
http://localhost:3000/
```

## Note
- The app currently uses a server deployed in Heroku. To use the server running in your localhost for development purposes, replace all the server request URLs in the project to instead use your localhost with the port set to 5000.
- Create a file called '.env' in the 'server' directory with the following in it, to enable MongoDB services in the app:
```
MONGODB_URL = <your own MongoDB Atlas connection URL>
```

Thanks for checking out the project!!
