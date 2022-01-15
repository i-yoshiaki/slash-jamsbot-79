const pg = require('pg');
require('dotenv').config();

exports.pool = new pg.Pool ({
    connectionString:process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    }
});