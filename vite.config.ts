import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    
    // Capturamos la llave de Coolify o del archivo .env
    const apiKey = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY;

    return {
        // CAMBIO CRÍTICO: Usamos '/' en lugar de './' para dominios principales
        base: '/', 
        
        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        plugins: [react()],
        
        // Inyectamos la variable de las DOS formas que React suele buscarla
        define: {
            'process.env.GEMINI_API_KEY': JSON.stringify(apiKey),
            'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(apiKey),
            'import.meta.env.GEMINI_API_KEY': JSON.stringify(apiKey)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'), // Apuntamos a src por seguridad
            }
        }
    };
});
