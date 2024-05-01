import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const htmlInputFile = import.meta.env.VITE_HTML_INPUT_FILE || '/src/main.jsx';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: htmlInputFile
    }
  }
});
