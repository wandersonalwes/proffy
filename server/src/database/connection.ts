import path from 'path';
import knex, { ConnectionConfig } from 'knex';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'db.sqlite'),
  },
  useNullAsDefault: true,
});

export default db;