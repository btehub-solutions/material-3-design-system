
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        login: resolve(import.meta.dirname, 'pages/login.html'),
        settings: resolve(import.meta.dirname, 'pages/settings.html'),
        starter: resolve(import.meta.dirname, 'pages/starter-template.html'),
        notfound: resolve(import.meta.dirname, 'pages/404.html'),
        onboarding: resolve(import.meta.dirname, 'pages/onboarding.html'),
        profile: resolve(import.meta.dirname, 'pages/profile.html'),
        offline: resolve(import.meta.dirname, 'pages/offline.html'),
      },
    },
  },
});
