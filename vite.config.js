import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

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
    // Gzip compression for better performance
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Only compress files larger than 10KB
      deleteOriginFile: false,
    }),
    // Brotli compression for even better compression
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
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
          pdf: ['react-pdf', 'pdfjs-dist'],
          carousel: ['react-responsive-carousel'],
        },
        // Optimize asset file naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging (disable in production if not needed)
    sourcemap: false,
    // Target modern browsers for better optimization
    target: 'esnext',
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
