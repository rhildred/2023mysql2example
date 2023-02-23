# 2023 mysql2 example

This uses mysql2-async and await to retreive data from a mysql instance contained within a docker container. To use:

1. Install docker desktop or docker.io on linux (first time only).
2. Run `docker-compose up` in the project folder to start the database.
3. The first time you use this run `npm install`
4. To run the migrations run `npm run migrate`
5. To run tests run `npm run test`
6. Install mysql workbench if you prefer and set up a connection to localhost to view the data
