import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCompression from 'vite-plugin-compression';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  // FORZAMOS A VITE A USAR LA CARPETA PUBLIC
  publicDir: 'public', 
  
  plugins: [
    react(),
    // HTML optimization plugin
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Anime Flexx',
          description: 'Watch anime online on Anime Flexx',
        },
      },
    }),
    // PWA plugin for offline support and better SEO
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'images/discordlogo.png'], // Añadimos el logo aquí también por seguridad
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
      generateRobotsTxt: false 
    }),
  ],
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 5173, 
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 5173,
  },
});
