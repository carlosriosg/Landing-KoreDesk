import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // Comentamos tu App temporalmente

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("ERROR FATAL: No encuentro el div con id 'root'");
} else {
  console.log("React está intentando montar...");
  ReactDOM.createRoot(rootElement).render(
    <div style={{ backgroundColor: 'red', color: 'white', height: '100vh', padding: '50px', fontSize: '30px' }}>
      <h1>¡SISTEMA FUNCIONANDO! 🚀</h1>
      <p>Si ves esto, React funciona bien.</p>
      <p>El problema estaba en App.tsx o en la configuración de rutas.</p>
    </div>
  );
}
