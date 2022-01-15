const pg = require('pg');
require('dotenv').config();

exports.pool = new pg.Pool ({
    connectionString:process.env.DATABASE_URL,
    dialectOptions: {//以下を追加
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
    }
});