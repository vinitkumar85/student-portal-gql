'use client';

import { useQuery, gql } from "@apollo/client";

const STUDENT_QUERY = gql`query Query {
    students {
      fname
      lname
      id
    }
  }`

export default function StudentsList() {
    const {data: studentList, status} = useQuery(STUDENT_QUERY);

    if(status === 'loading'){
        return <p>loading...</p>
    }
    const {students} = studentList || {};

    return <>
        <ul>
            {
               students && students.length && students.map((student)=>{
                return <li key={student.id}>{student.fname} {student.lname} </li>
               }) 
            }
        </ul>
    </>
}