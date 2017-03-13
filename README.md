# Koa API Starter
###### A starter API server built on Koa 2 and BookshelfJS (SQL ORM)

### Features
* ES7 async/await
* Koa 2 (HTTP Middleware
    * Koa Router
    * Koa Bodyparser
* BookshelfJS with Knex (SQL ORM)
    * Migrations
    * Models
* Indicative Validation
* JWT Authentication

### Initial Setup
```
git pull https://github.com/zlshames/koa-api-starter.git
cd koa-api-starter
cp .env.example .env                // Copy the environment file to be configured
npm install                         // Install dependencies
npm install -g knex                 // Install knex globally to use knex database migrations
```

### Configure Database
* Edit the **.env** file and enter in your database information
* Edit the files in **/migrations** to whatever you want
* For more migration information, visit: http://knexjs.org/

### Database Migrations
```
knex migrate:latest                 // Run migration
knex migrate:rollback               // Rollback previous migration
```

### Run the server
```
npm run server                      // Runs the server in development mode
npm run server:prod                 // Runs the server in prroduction mode
```
