
import React, { useState, useRef, useEffect } from 'react';
import { getKoreDeskAssistantResponse } from '../services/geminiService';

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory, isTyping]);

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const userMsg = message.trim();
        setMessage('');
        setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsTyping(true);

        const response = await getKoreDeskAssistantResponse(userMsg);
        setChatHistory(prev => [...prev, { role: 'model', text: response || 'Sin respuesta' }]);
        setIsTyping(false);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-6">
            <div className={`bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col w-[380px] max-h-[600px] transition-all duration-500 origin-bottom-right overflow-hidden ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}`}>
                {/* Simplified Header */}
                <div className="p-8 border-b border-slate-50 bg-white">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined text-3xl text-white">auto_awesome</span>
                        </div>
                        <div>
                            <p className="text-lg font-black text-primary">KoreAI</p>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                                <p className="text-[10px] text-accent font-black uppercase tracking-widest">Activo ahora</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Body */}
                <div 
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto p-8 space-y-6 min-h-[350px] bg-white scrollbar-hide"
                >
                    {chatHistory.length === 0 && (
                        <div className="space-y-4 text-center py-6">
                            <p className="text-base text-slate-800 font-medium">¿Cómo puedo ayudarte hoy?</p>
                            <p className="text-sm text-slate-400 font-light">Prueba preguntando sobre nuestras integraciones con WhatsApp o tiempos de implementación.</p>
                        </div>
                    )}
                    {chatHistory.map((chat, idx) => (
                        <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                                chat.role === 'user' 
                                ? 'bg-primary text-white rounded-tr-none shadow-md shadow-primary/10' 
                                : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-100'
                            }`}>
                                {chat.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-slate-50 px-5 py-3 rounded-2xl rounded-tl-none border border-slate-100 text-slate-400 text-xs flex gap-1">
                                <span className="animate-bounce">.</span>
                                <span className="animate-bounce delay-75">.</span>
                                <span className="animate-bounce delay-150">.</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Enhanced Input Area */}
                <div className="p-6 bg-white border-t border-slate-50">
                    <div className="relative flex items-center gap-3">
                        <input 
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Escribe tu mensaje..."
                            className="flex-1 px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
                        />
                        <button 
                            onClick={handleSendMessage}
                            disabled={!message.trim() || isTyping}
                            className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center disabled:opacity-20 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/10"
                        >
                            <span className="material-symbols-outlined text-2xl">arrow_upward</span>
                        </button>
                    </div>
                </div>
            </div>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-20 h-20 bg-primary rounded-[2rem] shadow-2xl shadow-primary/30 flex items-center justify-center text-white hover:rotate-12 hover:scale-110 transition-all duration-500 active:scale-90 relative border-4 border-white"
            >
                <span className="material-symbols-outlined text-4xl font-bold">{isOpen ? 'close' : 'chat_bubble'}</span>
                {!isOpen && <span className="absolute top-0 right-0 w-5 h-5 bg-accent border-4 border-white rounded-full"></span>}
            </button>
        </div>
    );
};

export default ChatWidget;
