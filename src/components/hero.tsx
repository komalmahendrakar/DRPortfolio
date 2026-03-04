"use client";

import React from 'react';
import { Button } from './ui/button';
import { Phone, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CONTACT_INFO } from '@/lib/constants';

export const Hero = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>9+ Years Specialized Experience</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold leading-[1.1] text-foreground">
            Advanced Orthopedic & <br />
            <span className="text-primary italic">Spine Care</span> You Can Trust
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Personalized treatment plans for specialized spine surgery, joint replacement, and complex trauma care. Dr. Poornesh Gowda ensures recovery with advanced surgical techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-8 py-7 text-lg soft-shadow transition-all hover:scale-105">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                Book Appointment
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 py-7 text-lg group bg-white border-2">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary transition-transform group-hover:rotate-12" />
                Call Now
              </a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5000+</p>
              <p className="text-sm text-muted-foreground">Patients Treated</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">1500+</p>
              <p className="text-sm text-muted-foreground">Surgeries Done</p>
            </div>
          </div>
        </div>
        
        <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="relative z-10 rounded-2xl overflow-hidden soft-shadow border-4 border-white animate-float">
            <Image 
              src={heroImg?.imageUrl || ''} 
              alt="Medical Care" 
              width={700} 
              height={500}
              className="object-cover"
              priority
              data-ai-hint="modern hospital"
            />
          </div>
          {/* Accent Shapes */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-0 rotate-12" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full -z-0" />
        </div>
      </div>
    </section>
  );
};
