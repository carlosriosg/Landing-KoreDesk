import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // 1. Cargar variables de archivo .env (si existe)
    const env = loadEnv(mode, '.', '');
    
    // 2. BUSCAR LA LLAVE REAL: Prioriza la de Coolify (process.env) sobre el archivo local
    const realApiKey = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY;

    console.log("Building with Key exists?", !!realApiKey); // Esto aparecerá en los logs de Coolify si quieres verificar

    return {
        // Esto arregla las rutas rotas
        base: './', 
        
        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        plugins: [react()],
        
        // Aquí "tatuamos" la variable dentro del código de React
        define: {
            'process.env.API_KEY': JSON.stringify(realApiKey),
            'process.env.GEMINI_API_KEY': JSON.stringify(realApiKey)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});
