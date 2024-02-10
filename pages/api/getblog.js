// pages/api/getblog.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { slug } = req.query;
  const filePath = path.join(process.cwd(), 'blogdata', `${slug}.json`);

  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      res.status(200).json(JSON.parse(data));
    } else {
      res.status(404).json({ error: "No such blog found" });
    }
  } catch (error) {
    console.error('Error reading JSON data:', error);
    res.status(500).json({ error: 'Error reading JSON data' });
  }
}
