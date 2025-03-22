import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'html2pdf.js': '/node_modules/html2pdf.js/dist/html2pdf.bundle.js'
    }
  }
});
