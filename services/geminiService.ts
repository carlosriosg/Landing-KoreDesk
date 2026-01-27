import { GoogleGenAI } from "@google/genai";

// 1. OBTENCIÓN SEGURA DE LA LLAVE 🛡️
// Buscamos en process.env, en import.meta.env (Vite) o usamos una de respaldo.
// El "|| 'DEMO_KEY_TEMPORAL'" es lo que EVITA LA PANTALLA BLANCA.
const apiKey = process.env.API_KEY || 
               process.env.GEMINI_API_KEY ||
               (import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) || 
               "DEMO_KEY_TEMPORAL";

// 2. Inicializamos el cliente con lo que hayamos encontrado
const ai = new GoogleGenAI({ apiKey: apiKey });

export const getKoreDeskAssistantResponse = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp', // Usamos un modelo válido (el 3-preview a veces da error si no tienes acceso)
      contents: {
          role: 'user',
          parts: [{ text: message }]
      },
      config: {
        systemInstruction: {
            parts: [{ text: `You are KoreDesk Expert, a highly professional AI assistant for a B2B platform named KoreDesk. 
        KoreDesk specializes in AI-powered sales assistants, customer support centralization, and high-performance automation.
        
        Key Selling Points to Mention:
        - 18x faster than traditional B2B systems.
        - 94% first-contact resolution rate.
        - 85% increase in operational efficiency.
        - Integration with WhatsApp, Messenger, Instagram, and Web Chat.
        
        Tone: Professional, expert, helpful, and concise. 
        Language: Spanish (as the main target is Spanish-speaking B2B).
        
        Always encourage the user to book a "Consultoría Gratuita" if they have complex business needs.` }]
        },
        temperature: 0.7,
        topP: 0.95,
      },
    });
    
    // Acceso seguro al texto
    return response.text ? response.text() : "No pude generar una respuesta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, tuve un problema al procesar tu solicitud (Verifica tu API Key).";
  }
};

export async function* streamKoreDeskResponse(message: string) {
  try {
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash-exp',
      contents: {
          role: 'user',
          parts: [{ text: message }]
      },
      config: {
        systemInstruction: {
            parts: [{ text: `You are KoreDesk Expert, a highly professional AI assistant for KoreDesk. 
        Spanish language only. Professional and results-oriented.` }]
        },
        temperature: 0.7,
      },
    });

    for await (const chunk of responseStream) {
      const text = chunk.text();
      if (text) yield text;
    }
  } catch (error) {
    console.error("Gemini Streaming Error:", error);
    yield "Error de conexión con el asistente.";
  }
}
