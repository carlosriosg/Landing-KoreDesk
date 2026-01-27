
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/terminos" element={<TermsPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
