# Getting started with React + NestJS boilerplate BACKEND :rocket:

## This project is set up to work with the FRONTEND that can be found [here](https://github.com/Mitchell8210/React-NestJS-boilerplate-FRONTEND).

### _\*\*In order to complete the setup, you will need to create a database locally or remotely with another service. (suggested: download mysql workbench or dbeaver for mysql, or PGAdmin for Postgres_

<br/> 
<br/>

## Once you have gone through the setup of the [FRONTEND](https://github.com/Mitchell8210/React-NestJS-boilerplate-FRONTEND), you can follow these steps to get the BACKEND setup in just a few minutes.

Step 1. Clone this repository. \
Step 2. cd into the project. \
Step 3. create `.env.dev` file with copied content from the `.env.example` file. \
Step 4. Set the `AUTH0_DOMAIN` and `AUTH0_CLIENT_ID` variables to the same ones that the frontend is using, (found in your Auth0 dashboard -> Applications -> [appname]) \
Step 5. Create a new database either locally or through a remote service \
Step 6. Fill out the variables (`DATABASE_HOST`, `DATABASE_NAME`,`USER`,`PASSWORD`) with the proper values. \
<br/>
_\*\*If not using a locally running database, the `DATABASE_HOST` variable will be the connection string for the remotely hosted db._
<br/>
<br/>

### After the initial setup is complete and your database is running, you can start the application with `yarn start:dev`. Then go to the FRONTEND, login and a new user record should be created in your newly created database.

<br/>

## Congratulations! You now have a fully functioning Full Stack Application. :rocket:

<br/>
<br/>
