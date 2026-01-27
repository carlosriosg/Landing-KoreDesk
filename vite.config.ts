import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    
    // 👇 EL CAMBIO ESTÁ AQUÍ 👇
    // Si no encuentra la llave real, usa "DEMO_KEY" para que la página NO explote en blanco
    const apiKey = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY || "DEMO_KEY_TEMPORAL";

    return {
        base: '/', 
        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        plugins: [react()],
        define: {
            // Pasamos la llave (o la falsa) a la aplicación
            'process.env.GEMINI_API_KEY': JSON.stringify(apiKey),
            'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(apiKey),
            'import.meta.env.GEMINI_API_KEY': JSON.stringify(apiKey)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});
