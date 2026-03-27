import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCompression from 'vite-plugin-compression';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    // HTML optimization plugin
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Anime Flexx', // Actualizado para tu proyecto
          description: 'Watch anime online on Anime Flexx',
        },
      },
    }),
    // PWA plugin for offline support and better SEO
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Anime Flexx',
        short_name: 'AnimeFlexx',
        description: 'Watch anime online',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    // Compression plugin for better performance
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    // CONFIGURACIÓN DE SITEMAP CORREGIDA
    sitemap({
      hostname: 'https://anime-flexx.vercel.app', 
      dynamicRoutes: ['/'], 
      // ESTA LÍNEA ARREGLA EL ERROR ENOENT EN VERCEL:
      generateRobotsTxt: false 
    }),
  ],
  build: {
    // Optimize build output
    minify: 'esbuild',
    outDir: 'dist', // Aseguramos el directorio de salida
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  // Server configuration
  server: {
    port: 5173, 
    open: true,
    proxy: {
      // Proxy API requests to backend server
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  // Preview configuration
  preview: {
    port: 5173,
  },
});
