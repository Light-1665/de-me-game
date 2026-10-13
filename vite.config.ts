import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({base:'/de-me-game/',plugins:[react()],build:{outDir:'dist'}});
