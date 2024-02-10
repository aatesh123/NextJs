// pages/api/data.js

import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    try {
        const dataDir = path.join(process.cwd(), 'blogdata'); // Path to the directory containing JSON files
        const files = fs.readdirSync(dataDir); // Read all files in the directory

        // Initialize an array to store JSON data from each file
        const jsonData = [];

        // Loop through each file
        files.forEach((file) => {
            if (file.endsWith('.json')) {
                // Read JSON data from each file
                const filePath = path.join(dataDir, file);
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                jsonData.push(JSON.parse(fileContent)); // Parse JSON data and add it to the array
            }
        });

        return {
            props: { jsonData } // Return aggregated JSON data as props
          //  revalidate: 60 * 60 // Re-generate page every hour
        };
    } catch (error) {
        console.error('Error reading JSON data:', error);
        return {
            props: { jsonData: [] } // Return empty array if error occurs
        };
    }
}

export default function handler(req, res) {
    res.status(200).end(); // Default response for API route, not used for static generation
}
