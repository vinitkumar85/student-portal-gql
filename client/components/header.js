'use client';

import Link from 'next/link'

export default function Header(){
    return <nav>
        <Link href="/">Homepage</Link>
        <Link href="/register-student">Register</Link>
        <Link href="/about">About</Link>
        <Link href="/info">Information</Link>
    </nav>
}