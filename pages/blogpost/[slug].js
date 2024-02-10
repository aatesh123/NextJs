// pages/blogpost/[slug].js

import React from 'react';
import path from 'path';
import fs from 'fs';
import styles from '../../styles/BlogPost.module.css';

const Slug = ({ jsonData }) => {
  return (
    <div className={styles.topicContainer}>
      <h2 className={styles.topicTitle}>{jsonData.title}</h2>
      <div className={styles.topicContent}>
        <p>{jsonData.description}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const dataDir = path.join(process.cwd(), 'blogdata');
  const files = fs.readdirSync(dataDir);
  const paths = files
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      params: { slug: file.replace('.json', '') }
    }));
  console.log(paths)
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'blogdata', `${slug}.json`);

  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return {
      props: { jsonData: JSON.parse(jsonData) }
    };
  } catch (error) {
    console.error('Error reading JSON data:', error);
    return {
      props: { jsonData: null }
    };
  }
}

export default Slug;
