
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Always use the process.env.API_KEY directly for initialization as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getKoreDeskAssistantResponse = async (message: string) => {
  try {
    // Using gemini-3-flash-preview for basic text tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are KoreDesk Expert, a highly professional AI assistant for a B2B platform named KoreDesk. 
        KoreDesk specializes in AI-powered sales assistants, customer support centralization, and high-performance automation.
        
        Key Selling Points to Mention:
        - 18x faster than traditional B2B systems.
        - 94% first-contact resolution rate.
        - 85% increase in operational efficiency.
        - Integration with WhatsApp, Messenger, Instagram, and Web Chat.
        
        Tone: Professional, expert, helpful, and concise. 
        Language: Spanish (as the main target is Spanish-speaking B2B).
        
        Always encourage the user to book a "Consultoría Gratuita" if they have complex business needs.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    // Access the text property directly (not a method).
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, tuve un problema al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde o contacta directamente con nuestro equipo.";
  }
};

export async function* streamKoreDeskResponse(message: string) {
  try {
    // Generate streaming content for better user experience.
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are KoreDesk Expert, a highly professional AI assistant for KoreDesk. 
        Spanish language only. Professional and results-oriented.`,
        temperature: 0.7,
      },
    });

    for await (const chunk of responseStream) {
      // Access the text property of each chunk.
      const text = chunk.text;
      if (text) yield text;
    }
  } catch (error) {
    console.error("Gemini Streaming Error:", error);
    yield "Error de conexión.";
  }
}
