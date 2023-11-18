import { connection } from './connection.js';
import { generateId } from './ids.js';

const getStudentTable = () => connection.table('student');

export async function getStudents() {
  return await getStudentTable().select();
}

export async function createStudent(fname, lname, age) {
  const student = {id: generateId(), fname, lname, age}
  await getStudentTable().insert(student);
  return student;
}
