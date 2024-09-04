
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  console.log("save pecs list")
  if (req.method === 'POST') {
    const lists = req.body;

    const filePath = path.join(process.cwd(), 'data', 'pecslists.js');
    
    fs.writeFileSync(filePath, `export const pecsLists = ${JSON.stringify(lists, null, 2)};`);
    
    res.status(200).json({ message: 'Data saved successfully!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
