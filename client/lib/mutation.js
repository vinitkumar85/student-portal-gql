import {gql} from '@apollo/client';

export const STUDENT_MUTATION = gql`mutation RegisterStudentMutation($input: CreateStudentInput) {
    createStudent(input: $input){
        fname
    }
  }`