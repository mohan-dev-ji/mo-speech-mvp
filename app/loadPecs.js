// app/loadPecs.js
import fs from 'fs';
import path from 'path';

export async function getPecs() {
  const pecsDirectory = path.join(process.cwd(), 'public/pecs');
  const files = fs.readdirSync(pecsDirectory).filter(file => file.endsWith('.svg'));
  return files;
}
