import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const  slug = () => {
 
    const router=useRouter() ;
    const { slug } =router.query;
    return <>
    <div class={styles.topicContainer}>
    <h2 class={styles.topicTitle}>{slug}</h2>
    <div class={styles.topicContent}>
      <p>This is a paragraph where you can write about your topic. You can include any relevant information, details, or discussions related to the topic here.</p>
    </div>
  </div>
   </>
  
   
}

export default  slug
