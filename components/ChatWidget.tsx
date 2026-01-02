import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';
import { ChatMessage } from '../types';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I'm the Elevate Youth Assistant. How can I help you support our mission today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const history = messages
        .filter((_, i) => i > 0 || messages[0].role === 'user') 
        .map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));

      history.push({
        role: 'user',
        parts: [{ text: inputValue }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: history,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const text = response.text || "I'm sorry, I couldn't process that. Please reach out to support@elevateyouth.org.";
      
      const modelMessage: ChatMessage = {
        role: 'model',
        text: text,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: "I'm offline for a moment. Please check back soon!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-indigo-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300" style={{ height: '550px', maxHeight: '80vh' }}>
          
          <div className="bg-indigo-950 p-5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center text-white">
              <Sparkles className="w-5 h-5 mr-3 text-indigo-400" />
              <h3 className="font-bold text-lg">AI Support</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-indigo-400 hover:text-white transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-50 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-[20px] px-5 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none' 
                      : 'bg-white text-indigo-950 border border-indigo-50 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-indigo-400 border border-indigo-50 rounded-2xl rounded-bl-none px-5 py-3 text-sm flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse delay-150"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-5 bg-white border-t border-indigo-50">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-5 py-3 rounded-2xl bg-slate-50 border border-indigo-100 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-sm transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-indigo-600 text-white p-3 rounded-2xl hover:bg-indigo-500 disabled:opacity-50 transition-all active:scale-95 shadow-lg shadow-indigo-600/10"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-indigo-900' : 'bg-indigo-950'
        } text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center ring-4 ring-white shadow-indigo-950/20`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}