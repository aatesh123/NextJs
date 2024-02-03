import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import { useState, useEffect } from 'react';
const  slug = () => {
  const router=useRouter() ;
  const { slug } =router.query;
  const [jsonData, setJsonData] = useState([null]);
  useEffect(() => {
    if(!router.isReady)return;
    async function fetchData() {
      try {
        const response = await fetch(`/api/getblog?slug=${slug}`);
        console.log(`/api/blogpost?slug=${slug}`)
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
    if (slug) {
      fetchData();
    }
  }, [slug]);
 

    return <>
    <div className={styles.topicContainer}>
    <h2 className={styles.topicTitle}>{slug}</h2>
    <div className={styles.topicContent}>
    {jsonData ? (
          <p>{jsonData.description}</p>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  </div>
   </>
  
   
}

export default  slug
