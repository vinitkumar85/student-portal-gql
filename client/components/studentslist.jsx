'use client';

import { useQuery } from "react-query";

async function fetchStudentList() {
    const response = await fetch('http://localhost:9000/graphql', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify({
            query: `query Query {
                students {
                  fname
                  lname
                  id
                }
              }`
        })
    });
    const res = await response.json();
    return await res?.data?.students;
  }

export default function StudentsList() {
    const {data: studentList, status} = useQuery('students', fetchStudentList)
    if(status === 'loading'){
        return <p>loading...</p>
    }
    return <>
        <ul>
            {
               studentList && studentList.length && studentList.map((student)=>{
                return <li key={student.id}>{student.fname} {student.lname} </li>
               }) 
            }
        </ul>
    </>
}