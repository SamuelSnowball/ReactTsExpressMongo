## ReactTsExpressMongo README:

## Contents
This repo contains 3 containers:
1. react typescript frontend container exposed on port 3000 
2. express backend container with placeholder /api routes and request validation, exposed on port 3001 to interact with a...
3. mongo container

## Usage
docker-compose up -p reactmongo up --build

## Notes: 
1. These currently don't contain build stages within the dockerfile, could do within docker-compose?
2. Frontend hotreload within docker is broken, downgrading react-scripts to 4.0.3 didn't work with node version
Also tried adding in setup.js script from the github issue thread, also didn't work
3. The mongo container will be called just that, be careful if have several instances running
4. If ran the docker-compose up command previously the old network might throw an error, use docker network prune to remove it


##############################################

## Personal notes / steps to recreate the repo
1. Created parent DIR 

## Frontend
2. cd into parent DIR, run 'npx create-react-app my-app --template typescript' app name as frontend
3. Now able to start with 'npm start'
4. Add the dockerfile to the frontend directory
   (Not working)
   For hot reloading added in compose file:  environment:  - CHOKIDAR_USEPOLLING=true  
5. Run 'docker build -t frontend .'
6. Now run with 'docker run -p 3000:3000 frontend'

## Backend
7. Added backend directory 
8. Able to run 'npm start' which runs nodemon on port 3001
9. Added docker file to backend
10. 'docker build -t backend .'
11. Can now run 'docker run -p 3001:3001 backend'

## Compose
12. Added compose file, ensure node module volumes are set
13. docker-compose -p projectprefix up --build 
14. This will build containers: projectprefix_frontend, projectprefix_backend, mongo
