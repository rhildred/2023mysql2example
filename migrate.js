// migrate.js
import path from 'path';
import { fileURLToPath } from 'url';
import migrations from 'sql-migrations';
import Db from 'mysql2-async';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

var configuration = {
    migrationsDir: path.resolve(__dirname, 'migrations'), // This is the directory that should contain your SQL migrations.
    host: 'localhost', // Database host
    port: 3306, // Database port
    db: 'test', // Database name
    user: 'root', // Database username
    password: 'example', // Database password
    adapter: 'mysql', // Database adapter: pg, mysql
    // Parameters are optional. If you provide them then any occurrences of the parameter (i.e. FOO) in the SQL scripts will be replaced by the value (i.e. bar).
    parameters: {
        "FOO": "bar"
    },
    minMigrationTime: new Date('2018-01-01').getTime() // Optional. Skip migrations before this before this time.
};

const migrationRunner  = async ()=>{
    const db = new Db({
        host: 'localhost',
        password: 'example',
        database: 'sys'
      })
      const row = await db.query(`CREATE DATABASE IF NOT EXISTS ${configuration.db}`);
      migrations.run(configuration);

}

migrationRunner();
