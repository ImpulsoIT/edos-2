import fs from 'fs';
import path from 'path';

// Hostinger hPanel Node.js Application Startup File
// This file serves as the entry point when Hostinger launches the server.

const buildFile = path.resolve(process.cwd(), 'dist', 'server.cjs');

if (!fs.existsSync(buildFile)) {
  console.error('------------------------------------------------------------');
  console.error('ERROR: Production build file not found at:', buildFile);
  console.error('Please make sure that "npm run build" is executed during the');
  console.error('deployment process in Hostinger to compile the application.');
  console.error('------------------------------------------------------------');
  process.exit(1);
}

// Dynamically import the compiled production server
import('./dist/server.cjs').catch((err) => {
  console.error('Failed to load compiled server:', err);
  process.exit(1);
});
