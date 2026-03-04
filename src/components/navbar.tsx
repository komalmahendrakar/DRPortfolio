"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl md:text-2xl font-headline font-bold text-primary leading-none">Dr. Poornesh Gowda</span>
          <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-medium">Orthopedic & Spine Surgeon</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <Button asChild variant="default" className="rounded-full px-6">
            <a href={`tel:${CONTACT_INFO.phone}`}>Book Appointment</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary">
            <Phone size={20} />
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors">
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full py-6 rounded-xl">
            <a href={`tel:${CONTACT_INFO.phone}`}>Call to Book</a>
          </Button>
        </div>
      )}
    </nav>
  );
};
