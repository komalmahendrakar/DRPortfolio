"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Input } from './ui/input';
import { MessageSquare, X, Send, Bot, User, Loader2, Calendar } from 'lucide-react';
import { orthoAssistant, type OrthoAssistantInput } from '@/ai/flows/ortho-assistant-flow';
import { useBooking } from './booking-context';
import { cn } from '@/lib/utils';

export const AIChat = () => {
  const { openBooking } = useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await orthoAssistant({
        message: userMessage,
        history: messages
      });

      setMessages(prev => [...prev, { role: 'model', text: result.reply }]);
      
      if (result.suggestedAction === 'book_appointment') {
        // Option to add a special message or button
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I'm having trouble connecting right now. Please try calling our clinic directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col soft-shadow border-none overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <CardHeader className="bg-primary text-white p-4 flex flex-row items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot size={24} />
              <div>
                <CardTitle className="text-sm font-headline">Dr. Gowda's AI Assistant</CardTitle>
                <p className="text-[10px] opacity-80">Online | Ask me anything</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 h-8 w-8">
              <X size={18} />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50" ref={scrollRef}>
            {messages.length === 0 && (
              <div className="text-center py-8 space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-primary">
                  <Bot size={24} />
                </div>
                <p className="text-sm text-muted-foreground">Hello! I'm here to help you with any questions about spine surgery, joint replacements, or general orthopedic care. How can I assist you today?</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Knee pain", "Spine surgery info", "Clinic hours"].map(q => (
                    <button 
                      key={q} 
                      onClick={() => { setInput(q); }}
                      className="text-xs bg-white border px-3 py-1.5 rounded-full hover:bg-primary/5 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.role === 'user' ? "justify-end" : "justify-start")}>
                <div className={cn(
                  "max-w-[80%] p-3 rounded-2xl text-sm",
                  m.role === 'user' 
                    ? "bg-primary text-white rounded-tr-none" 
                    : "bg-white border text-foreground rounded-tl-none shadow-sm"
                )}>
                  {m.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="p-4 border-t bg-white flex flex-col space-y-3">
             <div className="flex w-full space-x-2">
                <Input 
                  placeholder="Type your question..." 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="rounded-full"
                />
                <Button onClick={() => handleSendMessage()} size="icon" className="rounded-full shrink-0">
                  <Send size={18} />
                </Button>
             </div>
             <p className="text-[10px] text-center text-muted-foreground">
               AI Assistant advice is for information only.
             </p>
          </CardFooter>
        </Card>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)} 
          className="h-14 w-14 rounded-full soft-shadow hover:scale-110 transition-transform p-0 flex items-center justify-center"
          aria-label="Open AI Assistant"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};
