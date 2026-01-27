
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => (
    <footer className="bg-white border-t border-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
                <Logo />
                <p className="text-slate-400 text-xs font-light tracking-wide">
                    Infraestructura de IA de alto rendimiento para el sector B2B.
                </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
                <p className="text-sm text-slate-500 font-medium">© 2026 KoreDesk. Todos los derechos reservados.</p>
                <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                    <span>Privacy First</span>
                    <span className="text-slate-200">•</span>
                    <span>Secure Cloud</span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
