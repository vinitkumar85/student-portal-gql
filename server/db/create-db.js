import { connection } from './connection.js';

const { schema } = connection;

await schema.dropTableIfExists('student');

await schema.createTable('student', (table) => {
  table.text('id').notNullable().primary();
  table.text('fname').notNullable();
  table.text('lname').notNullable();
  table.text('age');
});

await connection.table('student').insert([
  {
    id: 'FjcJCHJALA4i',
    fname: 'Shlok',
    lname: 'Verma',
    age: '6',
  },
  {
    id: 'GjcJCHJALA4i',
    fname: 'Shubh',
    lname: 'Verma',
    age: '7',
  },
]);

process.exit();
