
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Bone, Activity, Ambulance, Microscope, Zap, Thermometer } from 'lucide-react';
import { Button } from './ui/button';
import { useBooking } from './booking-context';

const specializations = [
  {
    title: "Spine Surgery",
    desc: "Specialized care for disc prolapse, spondylosis, and spinal fractures.",
    icon: Activity,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Joint Replacement",
    desc: "Advanced total knee and hip replacement for pain-free mobility.",
    icon: Bone,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Trauma & Fracture",
    desc: "Expert management of complex fractures and emergency trauma care.",
    icon: Ambulance,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Orthopedic Oncology",
    desc: "Comprehensive care for bone tumors and soft tissue sarcomas.",
    icon: Microscope,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Back & Neck Pain",
    desc: "Non-surgical and minimally invasive treatments for chronic pain.",
    icon: Thermometer,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Sports Injury",
    desc: "Specialized recovery for ACL, PCL tears, and ligament injuries.",
    icon: Zap,
    color: "bg-green-50 text-green-600"
  }
];

export const Specializations = () => {
  const { openBooking } = useBooking();

  return (
    <section className="py-24 bg-white" id="specializations">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-headline font-bold mb-6">World-Class Specialized Care</h3>
          <p className="text-muted-foreground">Comprehensive orthopedic and spine solutions delivered with precision and clinical excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, idx) => (
            <Card key={idx} className="group border-none soft-shadow hover-lift transition-all cursor-pointer">
              <CardHeader className="pb-4">
                <div className={`${spec.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <spec.icon size={28} />
                </div>
                <CardTitle className="text-xl font-headline">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {spec.desc}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  onClick={openBooking}
                >
                  Learn More & Book →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
