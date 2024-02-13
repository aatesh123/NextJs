import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve('./blogdata/contactData.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email, desc } = req.body;
    const contactData = { name, phone, email, desc };

    try {
      // Read existing data from the file
      const existingData = fs.existsSync(dataFilePath)
        ? JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'))
        : [];

      // Add new contact data
      existingData.push(contactData);

      // Write updated data back to the file
      fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

      res.status(200).json({ message: 'Contact data stored successfully!' });
    } catch (error) {
      console.error('Error storing contact data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
