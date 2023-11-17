import { connection } from './connection.js';

const { schema } = connection;

await schema.dropTableIfExists('student');

await schema.createTable('student', (table) => {
  table.text('id').notNullable().primary();
  table.text('name').notNullable();
  table.text('age');
});

await connection.table('student').insert([
  {
    id: 'FjcJCHJALA4i',
    name: 'Shlok',
    age: '6',
  },
  {
    id: 'GjcJCHJALA4i',
    name: 'Shubh',
    age: '7',
  },
]);

process.exit();
