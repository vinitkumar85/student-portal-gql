'use client';

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import {STUDENT_MUTATION} from '../../lib/mutation';

export default function RegisterStudent() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState('');
    const {push}  = useRouter();

    const [mutate, result] = useMutation(STUDENT_MUTATION);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit");
        mutate({variables: {input : {fname, lname, age}}});
       // if (fname) {
            push('http://localhost:3000/')
         // }
    }

    return <>
        <form>
            <p><input type="text" name="fname" onChange={(e)=>setFname(e.target.value)}></input></p>

            <p><input type="text" name="lname" onChange={(e)=>setLname(e.target.value)}></input></p>

            <p><input type="text" name="age" onChange={(e)=>setAge(e.target.value)}></input></p>

            <p>
                <button onClick={submitHandler}>Register</button>
            </p>


        </form>
    
    </>

}