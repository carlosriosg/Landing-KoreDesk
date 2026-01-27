import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';

// 1. Componente para atrapar errores
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: string}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error: error.toString() };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: 'red', fontFamily: 'sans-serif' }}>
          <h1>💥 ¡Algo explotó en la App!</h1>
          <h3>El error es:</h3>
          <pre style={{ background: '#eee', padding: '20px', borderRadius: '5px' }}>
            {this.state.error}
          </pre>
          <p>Toma una captura de esto para saber qué arreglar.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// 2. Tu App Normal protegida
const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/terminos" element={<TermsPage />} />
                    {/* Ruta de prueba segura */}
                    <Route path="/test" element={<h1>Soy la ruta Test y funciono.</h1>} />
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
};

export default App;
