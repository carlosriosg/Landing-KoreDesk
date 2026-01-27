import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';

const App: React.FC = () => {
    // Agregamos un console.log para ver si App se está ejecutando
    console.log("App component mounted!"); 

    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta principal */}
                <Route path="/" element={<HomePage />} />
                
                {/* Ruta de términos */}
                <Route path="/terminos" element={<TermsPage />} />
                
                {/* Ruta de prueba para confirmar que no es la Home la que falla */}
                <Route path="/test" element={<h1 style={{color: 'red', fontSize: '50px'}}>FUNCIONA</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
