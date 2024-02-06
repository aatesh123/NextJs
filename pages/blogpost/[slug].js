import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

const Slug = ({ jsonData }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
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
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {
    const response = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    if (response.ok) {
      const data = await response.json();
      return {
        props: { jsonData: data },
      };
    } else {
      console.error('Failed to fetch JSON data');
      return {
        props: { jsonData: null },
      };
    }
  } catch (error) {
    console.error('Error fetching JSON data:', error);
    return {
      props: { jsonData: null },
    };
  }
}

export default Slug;
