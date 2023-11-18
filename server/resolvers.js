import { getStudents, createStudent } from "./db/students.js"

export const resolvers = {
    Query: {
        students: async ()=> {
            const studentsArr = await getStudents();
            return studentsArr;
        }
    },
    Mutation: {
        createStudent: async (_root, {input})=> {
            const {fname, lname, age} = input;
            return await createStudent(fname, lname, age);
        }
    }
}