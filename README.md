# 2023 mysql2 example

This uses mysql2-async and await to retreive data from a mysql instance contained within a docker container. To use:

1. Install docker desktop or docker.io on linux (first time only).
2. Run `docker-compose up` in the project folder to start the database.
3. Install mysql workbench if you prefer and set up a connection to localhost.
4. Create a database and a table and change spec/mysql_spec.js to match the data that you insert.
