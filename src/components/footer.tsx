
"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

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
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors text-slate-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors text-slate-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors text-slate-400 hover:text-white">
                <Twitter size={20} />
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
                <span>The Bangalore Hospital, 202, RV Road, Basavanagudi, Bengaluru - 560004</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 802222 3456</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="text-primary shrink-0" size={18} />
                <span>contact@drpoorneshgowda.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} OrthoSpine Connect. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span className="bg-slate-800 px-3 py-1 rounded text-xs font-mono">Registration No: 119937 (KMC)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
