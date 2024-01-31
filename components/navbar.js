import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
const Navbar = () => {
  return (
    <>
    <div className={styles.topnav}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  )
}

export default Navbar
