import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/  +  vite-react-ssg static pre-rendering
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    chunkSizeWarningLimit: 900,
  },
  ssgOptions: {
    entry: 'src/main.jsx',
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested', // /boats -> /boats/index.html (clean URLs on Netlify)
    crittersOptions: false, // keep one shared stylesheet; avoid critical-CSS edge cases
  },
})
