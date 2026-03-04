"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-headline font-bold text-primary mb-1">Dr. Poornesh Gowda</h4>
              <p className="text-slate-400 text-sm italic">Orthopedic & Spine Specialist</p>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing expert surgical and non-surgical orthopedic care for over 9 years. Committed to restoring your mobility and quality of life.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/dr.poornesh/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors text-slate-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dr-poornesh-gowda-ms-395865238/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors text-slate-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Quick Links</h5>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/#about" className="text-slate-400 hover:text-primary transition-colors">About Dr. Gowda</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Our Services</h5>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Spine Surgery</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Joint Replacement</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Trauma Management</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Sports Medicine</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Contact Info</h5>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>{CONTACT_INFO.address.hospital}, {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city} - {CONTACT_INFO.address.pincode}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="text-primary shrink-0" size={18} />
                <span>{CONTACT_INFO.displayPhone}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="text-primary shrink-0" size={18} />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} OrthoSpine Connect. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span className="bg-slate-800 px-3 py-1 rounded text-xs font-mono">Registration No: {CONTACT_INFO.registrationNo}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
