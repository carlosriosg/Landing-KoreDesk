
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="animate-in fade-in duration-500">
            {/* Removed unused isLegalPage prop to fix TypeScript error as Navbar does not accept props */}
            <Navbar />
            <main className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/10">
                            Información Legal
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 text-primary">Términos y Condiciones</h1>
                        <p className="text-slate-400 text-sm">Última actualización: 24 de Mayo, 2024</p>
                    </div>
                    <div className="legal-content">
                        <p className="text-lg font-medium text-slate-800">Bienvenido a KoreDesk. Al acceder y utilizar nuestros servicios, usted acepta cumplir con los siguientes términos y condiciones.</p>
                        
                        <h2>1. Aceptación de los Términos</h2>
                        <p>Al utilizar la plataforma de KoreDesk (en adelante, "el Servicio"), usted acepta estar vinculado por estos Términos y Condiciones, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de cualquier ley local aplicable. Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio.</p>
                        
                        <h2>2. Uso del Servicio</h2>
                        <p>KoreDesk proporciona una plataforma de SaaS para la gestión de atención al cliente y ventas impulsada por Inteligencia Artificial. El uso del servicio está sujeto a las siguientes restricciones:</p>
                        <ul>
                            <li>No debe utilizar el Servicio para fines ilegales o no autorizados.</li>
                            <li>No debe intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web de KoreDesk.</li>
                            <li>Usted es responsable de mantener la confidencialidad de sus credenciales de acceso.</li>
                            <li>KoreDesk se reserva el derecho de suspender cuentas que violen nuestras políticas de uso justo.</li>
                        </ul>
                        
                        <h2>3. Propiedad Intelectual</h2>
                        <p>El Servicio, incluyendo pero no limitado a su código fuente, algoritmos de IA, interfaces, logotipos y diseños, es propiedad exclusiva de KoreDesk y está protegido por leyes de derechos de autor y propiedad intelectual internacionales.</p>
                        
                        <h2>4. Privacidad y Datos</h2>
                        <p>Su privacidad es importante para nosotros. El uso de sus datos se rige por nuestra Política de Privacidad. Al utilizar KoreDesk, usted garantiza que tiene los derechos necesarios para procesar los datos de sus clientes finales a través de nuestra plataforma.</p>
                        
                        <h2>5. Limitación de Responsabilidad</h2>
                        <p>Los servicios de KoreDesk se proporcionan "tal cual". KoreDesk no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo, sin limitación, las garantías implícitas de comerciabilidad o idoneidad para un propósito particular.</p>
                        
                        <div className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="mt-0 text-lg">¿Tiene preguntas legales?</h3>
                                <p className="mb-0 text-sm text-slate-500">Nuestro equipo legal está a su disposición para aclarar cualquier punto.</p>
                            </div>
                            <a className="px-6 py-3 bg-primary text-white font-bold rounded-xl text-sm hover:bg-opacity-90 transition-all shadow-md" href="mailto:legal@koredesk.com">
                                Contactar Soporte Legal
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsPage;
