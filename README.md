# Hello! Welcome to Chook.

## How to run 
To set up our web application locally based on the .zip file
### Here are the requirements (for Mac):
1. MAMP server
    -  how to install MAMP: https://www.mamp.info/en/downloads/ 
2. Docker
    - how to install Docker: https://www.docker.com/products/docker-desktop/
3. node
    - how to install node: 
    3.1.  Open a terminal
    3.2. `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    3.3. `brew update`
    3.4. `brew install node`

### Here are the requirements (for Windows):
1. WAMP server
    - how to install WAMP: https://www.wampserver.com/en/
2. Docker
    - how to install Docker: https://www.docker.com/products/docker-desktop/
3. node
    - how to install node: https://nodejs.org/en/download/

## How to start our application:
1. Run Docker
2. Run MAMP / WAMP
3. Open http://localhost/phpmyadmin
4. In the ESD-G3T1/sql folder,  copy the SQL script (chook_create.sql) and run it in the phpmyadmin console
5. Start Docker and change all the docker ids in docker-compose.yml to your own docker id
6. Open 2 terminals
    - 6.1. `cd ESD-G3T1`
        - 6.1.1 Run  `docker-compose up`

    - 6.2. `cd ESD-G3T1/ui`
        - 6.2.1 Run  `npm install`
        - 6.2.2 Run  `npm run dev`

7. Visit the webpage at http://localhost:3000
