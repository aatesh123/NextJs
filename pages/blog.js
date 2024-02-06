import React from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const Blog = ({ jjsonData }) => {
    return (
        <div className={styles.pointlistContainer}>
            <h2 className={styles.heading}>All Blogs</h2>

            {jjsonData.map((item, index) => (
                <ul key={index} className={styles.pointlist}>
                    <li className={styles.pointItem}>
                        <Link href={`/blogpost/${item.title} `} className={styles.pointLink}>
                            {item.title}
                        </Link>
                        <p className={styles.pointDescription}>{item.description.substr(0 , 100)} ..</p>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export async function getServerSideProps() {

    try {
        // Fetch data from your API endpoint
        const response = await fetch('http://localhost:3000/api/data');
        if (response.ok) {
            // Parse response data
            const data = await response.json();
            // Return data as props
            return {
                props: { jjsonData: data }
            };
        } else {
            console.error('Failed to fetch JSON data');
            return {
                props: { jjsonData: [] } // Return empty array if fetching fails
            };
        }
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return {
            props: { jjsonData: [] } // Return empty array if error occurs
        };
    }
}

export default Blog;
