import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-pdf-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.endsWith('.pdf')) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline');
          }
          next();
        });
      },
    },
  ],
  server: {
    cors: true,
    fs: {
      strict: false,
    },
  },
  assetsInclude: ['**/*.pdf'],
  publicDir: 'public',
  build: {
    // Production optimization settings - 2025 standards
    minify: 'esbuild', // Using esbuild for faster builds
    esbuild: {
      drop: ['console', 'debugger'], // Remove console.logs and debuggers in production
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Code splitting for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging (disable in production if not needed)
    sourcemap: false,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
