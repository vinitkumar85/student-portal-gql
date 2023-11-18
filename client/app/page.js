'use client';

import {useEffect, useState} from 'react';

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
                  id
                }
              }`
        })
      
    });
    return await response.json();
  }

export default function HomePage(){
      const [studentList, setStudentListdata] = useState([]);
      useEffect(() => {
        fetchStudentList().then((res) => {
            setStudentListdata(res?.data?.students);
        });
      }, []);

    return <>
        <h2>Student Portal</h2>
        <ul>
            {
               studentList && studentList.length && studentList.map((student)=>{
                return <li key={student.id}>{student.fname} {student.lname} </li>
               }) 
            }
        </ul>
    </>
}