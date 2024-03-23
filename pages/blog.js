// pages/blog.js

import React from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';
import { getStaticProps } from './api/data'; // Import getStaticProps from API route

const Blog = ({ jsonData }) => {
  function fun(c){
    return {__html: c };
 }
    return (<>
        <div className={styles.pointlistContainer}>
            <h2 className={styles.heading}>All Blogs</h2>

            {jsonData.map((item, index) => (
                <ul key={index} className={styles.pointlist}>
                    <li className={styles.pointItem}>
                        <Link href={`/blogpost/${item.title}`}>
                            {item.title}
                        </Link>
                        <p className={styles.pointDescription}   dangerouslySetInnerHTML={fun(item.description)}  ></p>
                        {/* {item.description.substr(0, 100)} ..*/ }
                        
                    </li>
                </ul>
            ))}
        </div>
        </>
    );
};

export { getStaticProps }; // Export getStaticProps

export default Blog;
