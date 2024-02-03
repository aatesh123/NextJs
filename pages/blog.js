import React from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';
const blog = () => {
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/api/data');
          if (response.ok) {
            const data = await response.json();
            setJsonData(data);
          } else {
            console.error('Failed to fetch JSON data');
          }
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      }
      fetchData();
    }, []);

    return (
<div className={styles.pointlistContainer}>
  <h2 className={styles.heading}>All Blogs</h2>

  {jsonData.map((item, index) => (
  <ul className={styles.pointlist}>
    <li className={styles.pointItem}>
      <Link href={`/blogpost/${item.title} `} className={styles.pointLink}>
        {item.title}
      </Link>
      {/* <h3 className={styles.pointDescriptionHeader}>About JavaScript</h3> Updated header */}
      <p className={styles.pointDescription}>{item.description.substr(0 , 100)} ..</p> {/* Updated paragraph */}
    </li>
  </ul>
   ))}

</div>




  
  )
}

export default blog

