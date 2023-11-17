import { getStudents, createStudent } from "./db/students.js"

export const resolvers = {
    Query: {
        students: async ()=> {
            const studentsArr = await getStudents();
            return studentsArr;
        }
    },
    Mutation: {
        createStudent: async (_root, args)=> {
            const {name, age} = args;
            return await createStudent(name, age);
        }
    }
}