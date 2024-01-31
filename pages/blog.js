import React from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const blog = () => {
  return (
<div className={styles.pointlistContainer}>
  <h2 className={styles.heading}>Three Awesome Points</h2>
  <ul className={styles.pointlist}>
    <li className={styles.pointItem}>
      <Link href="/blogpost/learn-javascript" className={styles.pointLink}>
        Learn JavaScript
      </Link>
      <h3 className={styles.pointDescriptionHeader}>About JavaScript</h3> {/* Updated header */}
      <p className={styles.pointDescription}>JavaScript is a powerful and versatile programming language used for web development. It allows you to create dynamic and interactive websites.</p> {/* Updated paragraph */}
    </li>
    <li className={styles.pointItem}>
      <Link href="/blogpost/learn-Python" className={styles.pointLink}>
        Learn Python
      </Link>
      <h3 className={styles.pointDescriptionHeader}>About Python</h3> {/* Updated header */}
      <p className={styles.pointDescription}>Python is a high-level programming language known for its simplicity and readability. It is widely used in various domains such as web development, data science, and artificial intelligence.</p> {/* Updated paragraph */}
    </li>
    <li className={styles.pointItem}>
      <Link href="/blogpost/learn-java" className={styles.pointLink}>
        Learn Java
      </Link>
      <h3 className={styles.pointDescriptionHeader}>About Java</h3> {/* Updated header */}
      <p className={styles.pointDescription}>Java is a popular programming language known for its portability and reliability. It is used for developing a wide range of applications, including mobile apps, enterprise software, and web applications.</p> {/* Updated paragraph */}
    </li>
  </ul>
</div>




  
  )
}

export default blog

