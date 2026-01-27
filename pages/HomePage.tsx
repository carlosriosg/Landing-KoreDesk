import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

// Nota: He quitado la importación de ChatWidget porque usaremos el script en index.html

const HomePage: React.FC = () => {
    const [stats, setStats] = useState({ chats: 1242, efficiency: 94.2 });
    const [logs, setLogs] = useState<string[]>([
        '[SYS] IA_AGENT_04: Ticket #9921 resolved (Auto)',
        '[WEB] Visitor_882 mapped to WhatsApp',
        '[IG] Processing DM... Sentiment: Positive',
        '[AI] Analyzing conversion probability... 88%',
        '[SYS] Syncing with Cloud Infrastructure'
    ]);
    const [barHeights, setBarHeights] = useState<number[]>(Array.from({ length: 40 }, () => Math.random() * 80 + 20));

    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Stats Simulation
        const statsInterval = setInterval(() => {
            setStats(prev => ({
                chats: prev.chats + Math.floor(Math.random() * 2),
                efficiency: 94 + Math.random() * 0.5
            }));
            
            // Log Simulation
            const newEvents = [
                `[WA] Venta cerrada: $${(Math.random() * 500 + 100).toFixed(2)}`,
                `[AI] Respuesta enviada en 0.8s`,
                `[SYS] Lead calificado: Alta Prioridad`,
                `[IG] Nuevo comentario filtrado por spam`,
                `[WEB] Carrito recuperado vía WhatsApp`
            ];
            setLogs(prev => [newEvents[Math.floor(Math.random() * newEvents.length)], ...prev.slice(0, 4)]);
            
            // Bar Simulation
            setBarHeights(Array.from({ length: 40 }, () => Math.random() * 80 + 20));
        }, 3000);

        return () => clearInterval(statsInterval);
    }, []);

    return (
        <div className="bg-white min-h-screen selection:bg-accent/30 font-sans text-slate-900">
            <main>
                {/* 1. HERO: LA PROMESA DE RENDIMIENTO */}
                <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 overflow-hidden">
                    <div className="absolute top-10 left-10">
                        <Logo />
                    </div>
                    
                    {/* Background Accents */}
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-slate-100">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#00A800]"></span>
                            Infraestructura de Venta 18x
                        </div>
                        
                        <h1 className="text-7xl md:text-[10rem] font-black text-primary leading-[0.8] tracking-tighter mb-10">
                            Vende <span className="text-accent italic">18x</span> <br/>más rápido.
                        </h1>
                        
                        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mb-14">
                            KoreDesk es la infraestructura que centraliza tus canales y automatiza el <span className="font-bold text-primary">94% de tus interacciones</span> con precisión de grado bancario.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="#contacto" className="group relative inline-flex items-center gap-3 px-12 py-6 bg-primary text-white font-bold rounded-[2rem] text-xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all overflow-hidden">
                                <span className="relative z-10">Consultoría Estratégica</span>
                                <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </a>
                            <div className="hidden md:flex flex-col items-start text-[10px] font-black uppercase tracking-widest text-slate-300 border-l-2 border-slate-100 pl-6 gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm text-accent">verified</span>
                                    Enterprise Grade Architecture
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">security</span>
                                    Data Encryption End-to-End
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. COMMAND CENTER: VISIBILIDAD EN TIEMPO REAL */}
                <section className="py-32 bg-dark-ui text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                            <div>
                                <h2 className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-4 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-accent"></span>
                                    Neural Command Center
                                </h2>
                                <h3 className="text-6xl font-black tracking-tighter">Visibilidad Operativa Total.</h3>
                            </div>
                            <div className="flex items-center gap-8 bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl">
                                <div className="text-right">
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Live Global Feed</p>
                                    <p className="text-sm font-mono text-accent">NODE_ST_ALPHA_8</p>
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30">
                                    <span className="material-symbols-outlined text-accent animate-spin-slow">sync</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Main Monitor Panel */}
                            <div className="lg:col-span-8 bg-[#0D1117] rounded-[3.5rem] p-10 border border-white/5 relative overflow-hidden shadow-2xl group">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                                <div className="flex justify-between items-start mb-16 relative z-10">
                                    <div className="space-y-2">
                                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Live Traffic Monitor</p>
                                        <p className="text-3xl font-black tracking-tight">Carga de Red Proyectada</p>
                                    </div>
                                    <div className="flex gap-3">
                                        {['WhatsApp', 'Instagram', 'Web'].map(c => (
                                            <span key={c} className="px-3 py-1.5 bg-white/5 rounded-xl text-[9px] font-black text-slate-400 border border-white/10 hover:bg-white/10 transition-colors cursor-default">{c}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Dynamic Data Waves */}
                                <div className="h-72 flex items-end gap-1.5 mb-16 relative z-10">
                                    {barHeights.map((h, i) => (
                                        <div 
                                            key={i} 
                                            className="flex-1 bg-gradient-to-t from-primary/20 via-primary/50 to-accent rounded-t-lg transition-all duration-1000 ease-in-out hover:brightness-150"
                                            style={{ height: `${h}%` }}
                                        ></div>
                                    ))}
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent h-20 w-full -translate-y-full animate-scanline"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10 border-t border-white/5 relative z-10">
                                    <div className="group/metric">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 group-hover/metric:text-accent transition-colors">AI Accuracy Index</p>
                                        <p className="text-5xl font-black text-accent tracking-tighter">{stats.efficiency.toFixed(1)}%</p>
                                        <p className="text-[9px] text-slate-600 mt-2">Target: 95.0%</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Live Interactions</p>
                                        <p className="text-5xl font-black tracking-tighter tabular-nums">{stats.chats.toLocaleString()}</p>
                                        <p className="text-[9px] text-slate-600 mt-2">Streaming real-time</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Resolution Rate</p>
                                        <p className="text-5xl font-black text-blue-400 tracking-tighter">94%</p>
                                        <p className="text-[9px] text-slate-600 mt-2">Automated flow</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Panels */}
                            <div className="lg:col-span-4 flex flex-col gap-8">
                                {/* Performance Dial */}
                                <div className="flex-1 bg-accent rounded-[3.5rem] p-12 flex flex-col justify-between shadow-2xl shadow-accent/20 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                            <span className="material-symbols-outlined text-5xl text-white">bolt</span>
                                        </div>
                                        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/70">Performance Factor</p>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-[10rem] font-black leading-none text-white tracking-tighter -ml-2">18x</p>
                                        <p className="text-sm font-bold text-white mt-4 uppercase tracking-widest italic opacity-80">Greater Operational Speed</p>
                                    </div>
                                </div>

                                {/* Event Terminal */}
                                <div className="h-56 bg-black/60 rounded-[3rem] p-8 border border-white/5 font-mono text-[11px] space-y-3 overflow-hidden relative group">
                                    <div className="absolute top-4 right-8 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]"></div>
                                    <p className="text-[9px] text-slate-600 uppercase mb-4 tracking-widest font-sans font-black">Stream Log System</p>
                                    {logs.map((log, i) => (
                                        <p key={i} className={`transition-opacity duration-500 ${i === 0 ? 'text-accent font-bold' : i === 1 ? 'text-blue-400' : 'text-slate-500'}`}>
                                            {log}
                                        </p>
                                    ))}
                                    <div className="absolute bottom-4 left-8 text-white/10 text-[8px] tracking-[1em] uppercase">Security Verified</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. RRSS HUB: CENTRALIZACIÓN VISUAL */}
                <section className="py-40 bg-white relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-4">Omnichannel Infrastructure</h2>
                            <h3 className="text-6xl font-black tracking-tighter mb-6">Tu negocio en todas partes.</h3>
                            <p className="text-slate-400 text-xl font-light">Un solo dashboard para dominarlos a todos.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { n: 'WhatsApp', c: 'from-[#25D366] to-[#128C7E]', i: 'forum', active: 'Ventas Directas', stats: '88% Conv.' },
                                { n: 'Instagram', c: 'from-[#E1306C] to-[#833AB4]', i: 'photo_camera', active: 'Atención 24/7', stats: '92% Satis.' },
                                { n: 'Messenger', c: 'from-[#0084FF] to-[#00C6FF]', i: 'chat', active: 'Ads Automation', stats: '14s Resp.' },
                                { n: 'Web Chat', c: 'from-[#005e99] to-[#00A800]', i: 'language', active: 'Conversión Web', stats: '24/7 Live' }
                            ].map((s, idx) => (
                                <div key={idx} className="group relative">
                                    <div className="absolute inset-0 bg-slate-50 rounded-[3rem] scale-90 group-hover:scale-100 transition-transform blur-3xl opacity-0 group-hover:opacity-100 duration-500"></div>
                                    <div className="relative bg-white border border-slate-100 p-10 rounded-[3rem] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                                        <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${s.c} flex items-center justify-center text-white mb-8 shadow-2xl relative z-10 group-hover:rotate-6 transition-transform`}>
                                            <span className="material-symbols-outlined text-3xl">{s.i}</span>
                                        </div>
                                        <div className="flex justify-between items-start mb-3 relative z-10">
                                            <h4 className="text-2xl font-black text-primary">{s.n}</h4>
                                            <span className="px-2 py-0.5 bg-accent/10 text-accent text-[8px] font-black uppercase rounded-lg border border-accent/20">Native</span>
                                        </div>
                                        <p className="text-sm text-slate-400 font-bold mb-6 relative z-10">{s.active}</p>
                                        <div className="flex items-center justify-between border-t border-slate-50 pt-6 relative z-10">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                                                <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{s.stats}</span>
                                            </div>
                                            <span className="material-symbols-outlined text-slate-200 group-hover:text-accent transition-colors">trending_up</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. PERFORMANCE SUPPORT: EL COPILOTO */}
                <section className="py-40 px-6 bg-slate-50/50 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-32 relative z-10">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-[4.5rem] overflow-hidden shadow-2xl group border-[12px] border-white">
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000" alt="Soporte Profesional" className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute bottom-12 left-12 bg-white/95 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white max-w-sm transform group-hover:-translate-y-4 transition-transform duration-700">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                                            <span className="material-symbols-outlined text-xs">auto_awesome</span>
                                        </div>
                                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 underline decoration-accent decoration-2 underline-offset-4">AI Pilot Mode</span>
                                    </div>
                                    <p className="text-2xl font-black text-primary leading-tight mb-4 italic">"El estándar 18x cambió nuestra forma de ver el B2B."</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                                        <div>
                                            <p className="text-xs font-black text-primary uppercase">M. Santoro</p>
                                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Director of Growth</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-12">
                            <h2 className="text-7xl font-black text-primary tracking-tighter leading-[0.85]">Multiplica tu <br/><span className="text-accent italic">capacidad humana.</span></h2>
                            <p className="text-2xl text-slate-500 font-light leading-relaxed">
                                No contrates más volumen, inyecta inteligencia. KoreDesk actúa como un copiloto de alto rendimiento que <span className="text-primary font-bold italic underline decoration-accent/30">resuelve el 94%</span> de la carga operativa sin intervención humana.
                            </p>
                            <div className="grid grid-cols-2 gap-10 pt-6">
                                <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-accent/20 transition-all group">
                                    <p className="text-6xl font-black text-primary mb-2 group-hover:scale-110 transition-transform origin-left">10x</p>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Cierres por Agente</p>
                                </div>
                                <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-accent/20 transition-all group">
                                    <p className="text-6xl font-black text-accent mb-2 group-hover:scale-110 transition-transform origin-left">0s</p>
                                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Tiempo de Espera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. USER EXPERIENCE: CONVERSIÓN */}
                <section className="py-40 px-6 bg-white relative">
                    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-32">
                        <div className="w-full lg:w-1/2 space-y-12">
                            <h2 className="text-7xl font-black text-primary tracking-tighter leading-[0.85]">La venta sucede <br/><span className="text-accent italic">al instante.</span></h2>
                            <p className="text-2xl text-slate-500 font-light leading-relaxed">
                                El cliente moderno no tiene paciencia. KoreDesk transforma cada chat en una terminal de venta lista para cobrar, agendar y fidelizar en <span className="text-primary font-black">segundos.</span>
                            </p>
                            <div className="flex flex-wrap gap-5 pt-8">
                                {['Checkout Nativo', 'Agendamiento AI', 'Segmentación Dinámica', 'Soporte VIP'].map(item => (
                                    <div key={item} className="px-8 py-5 bg-slate-50 rounded-[2rem] flex items-center gap-4 border border-slate-100 hover:bg-white hover:shadow-xl transition-all cursor-default">
                                        <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(0,168,0,0.4)]"></div>
                                        <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="rounded-[5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.1)] border-8 border-white relative group">
                                <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000" alt="Cliente Feliz" className="w-full aspect-square object-cover transition-transform duration-[15s] group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 border border-white/30 scale-50 group-hover:scale-100">
                                    <span className="material-symbols-outlined text-white text-6xl">play_arrow</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. CONVERT MODULE */}
                <section id="contacto" className="py-52 px-6">
                    <div className="max-w-5xl mx-auto bg-dark-ui rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.2)]">
                        {/* Interactive Border */}
                        <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-12 leading-[0.8]">Es hora del <br/><span className="text-accent italic underline decoration-white/5 underline-offset-8 italic">estándar 18x.</span></h2>
                            <p className="text-slate-400 text-2xl mb-20 font-light max-w-xl mx-auto leading-relaxed">No es una mejora incremental. Es el nuevo sistema operativo para empresas que escalan en serio.</p>
                            
                            <form className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto mb-20" onSubmit={(e) => e.preventDefault()}>
                                <input className="flex-1 px-10 py-7 rounded-[2.5rem] bg-white/5 border-2 border-white/10 text-white placeholder-white/30 outline-none focus:bg-white/10 focus:border-accent transition-all text-xl font-light" placeholder="Email corporativo..." type="email" />
                                <button className="group relative px-16 py-7 bg-accent text-white font-black rounded-[2.5rem] text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,168,0,0.3)] overflow-hidden">
                                    <span className="relative z-10">Agendar Demo</span>
                                    <div className="absolute inset-0 bg-white/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                            </form>
                            
                            <div className="flex flex-wrap justify-center gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-slate-500">
                                <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Zero Setup Fee</span>
                                <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> 24h Deployment</span>
                                <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Enterprise SLA</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
            {/* AQUÍ ESTABA <ChatWidget /> y LO ELIMINÉ */}

            <style>{`
                @keyframes scanline {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(500%); }
                }
                .animate-scanline {
                    animation: scanline 8s linear infinite;
                }
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 15s ease infinite;
                }
                .animate-spin-slow {
                    animation: spin 6s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default HomePage;
