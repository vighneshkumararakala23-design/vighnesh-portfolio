import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ChevronDown, 
  RotateCcw,
  User,
  ArrowUpRight
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

const INITIAL_WELCOME_MESSAGE = `Hi! I’m Vighnesh AI Assistant 👋
Ask me anything about Vighnesh’s skills, projects, career roadmap, or contact details.`;

const SUGGESTED_QUESTIONS = [
  "Who is Vighnesh?",
  "What skills does Vighnesh have?",
  "What projects has Vighnesh built?",
  "Tell me about the AI Notes Generator.",
  "What is Vighnesh currently learning?",
  "What is his career roadmap?",
  "How can I contact Vighnesh?"
];

export const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: INITIAL_WELCOME_MESSAGE,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input after modal opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: query,
      timestamp: new Date()
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInput('');
    setIsLoading(true);

    try {
      // Map to history format for server
      const serverHistory = updatedHistory.slice(1, -1).map(m => ({
        role: m.role,
        text: m.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: serverHistory
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const botReply = data.reply || "I am Vighnesh AI Assistant, here to answer questions about Vighnesh's portfolio. Please feel free to ask about his skills, projects, or roadmap!";

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: botReply,
          timestamp: new Date()
        }
      ]);
    } catch (err) {
      console.error('Chat error occurred');
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: "I am Vighnesh AI Assistant. I'm experiencing a brief network delay right now. You can continue browsing Vighnesh's projects, skills in Python and C++, or reach out to him directly via the Contact section!",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: 'model',
        text: INITIAL_WELCOME_MESSAGE,
        timestamp: new Date()
      }
    ]);
  };

  // Render markdown-like simple formatting (bolding, lists, linebreaks, links)
  const renderMessageContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Format bold text **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="font-semibold text-white light:text-slate-900">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <span key={idx} className="block leading-relaxed">
          {formattedParts}
        </span>
      );
    });
  };

  return (
    <aside 
      aria-label="Personal AI Assistant"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end"
    >
      {/* Chat Window */}
      {isOpen && (
        <div 
          role="dialog"
          aria-label="Vighnesh AI Assistant Chat"
          className="mb-3 w-[360px] sm:w-[390px] max-w-[calc(100vw-32px)] h-[520px] max-h-[calc(100vh-100px)] rounded-2xl bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border border-slate-800 light:border-slate-300 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-slate-800 light:border-slate-200 bg-slate-900/90 light:bg-slate-50/90 flex items-center justify-between">
            <div className="flex items-center gap-2.5 truncate">
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm shadow-cyan-500/20">
                <Bot className="w-4 h-4" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 light:border-white" />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white light:text-slate-900 tracking-tight">
                    Vighnesh AI Assistant
                  </h3>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-medium bg-cyan-950 light:bg-cyan-100 text-cyan-400 light:text-cyan-700 border border-cyan-800/60 light:border-cyan-200">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 light:text-slate-500 truncate leading-tight mt-0.5">
                  Ask me about Vighnesh, his skills, projects and career journey.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
              <button
                onClick={handleResetChat}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/80 light:hover:bg-slate-200 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat window"
                aria-label="Close chat window"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/80 light:hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'model' && (
                  <div className="w-6 h-6 rounded-md bg-cyan-950/80 light:bg-cyan-100 border border-cyan-800/60 light:border-cyan-200 text-cyan-400 light:text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-br-xs font-medium'
                      : 'bg-slate-900/90 light:bg-slate-100 text-slate-200 light:text-slate-800 border border-slate-800/80 light:border-slate-200 rounded-bl-xs'
                  }`}
                >
                  {renderMessageContent(m.text)}
                </div>

                {m.role === 'user' && (
                  <div className="w-6 h-6 rounded-md bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing / Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-6 h-6 rounded-md bg-cyan-950/80 light:bg-cyan-100 border border-cyan-800/60 light:border-cyan-200 text-cyan-400 light:text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-900/90 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 rounded-2xl rounded-bl-xs px-4 py-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 border-t border-slate-900 light:border-slate-200/80 bg-slate-950/60 light:bg-slate-50 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {SUGGESTED_QUESTIONS.slice(0, 4).map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono whitespace-nowrap bg-slate-900 light:bg-slate-200/80 hover:bg-slate-800 light:hover:bg-slate-300 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300 transition-colors flex-shrink-0 disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input & Send Box */}
          <div className="p-3 border-t border-slate-800 light:border-slate-200 bg-slate-900/60 light:bg-white">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Vighnesh's skills, projects..."
                disabled={isLoading}
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-xs sm:text-sm text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 light:focus:border-cyan-600 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-500 light:text-slate-400 font-mono">
              <span>Answers based solely on Vighnesh's portfolio</span>
              <span className="flex items-center gap-1 text-cyan-400 light:text-cyan-600 font-medium">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Powered by AI</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Assistant Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Open Personal AI Assistant"
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900 light:bg-white border border-cyan-500/50 hover:border-cyan-400 text-white light:text-slate-900 shadow-xl shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        {/* Pulsing AI Aura Dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
        </span>

        {/* Icon */}
        <Bot className="w-4 h-4 text-cyan-400 light:text-cyan-600 group-hover:rotate-12 transition-transform" />

        {/* User-Requested Label: “Here is my Personal AI Assistant” */}
        <span className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
          Here is my Personal AI Assistant
        </span>

        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white" />
        ) : (
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        )}
      </button>
    </aside>
  );
};
