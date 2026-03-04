
"use client";

import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Phone } from 'lucide-react';

const services = [
  {
    id: 'spine-surgery',
    title: "Spine Surgery",
    image: 'spine-surgery',
    desc: "Specialized in micro-discectomy, spinal fusion, and deformity corrections. We use minimally invasive techniques to ensure minimal blood loss and faster recovery.",
    features: ["Disk Prolapse Treatment", "Spinal Stenosis Surgery", "Spondylolisthesis Management", "Spinal Trauma Surgery"]
  },
  {
    id: 'joint-replacement',
    title: "Joint Replacement",
    image: 'joint-replacement',
    desc: "Restore your mobility with advanced Total Knee Replacement (TKR) and Total Hip Replacement (THR) procedures using long-lasting implants.",
    features: ["Primary Knee Replacement", "Revision Joint Surgery", "Partial Knee Replacement", "Direct Anterior Hip Replacement"]
  },
  {
    id: 'trauma-care',
    title: "Trauma Management",
    image: 'trauma-care',
    desc: "Expert care for complex fractures, multi-trauma accidents, and non-union of old fractures. Available for emergency consultations.",
    features: ["Complex Fracture Fixation", "Pelvic & Acetabular Trauma", "Pediatric Trauma Care", "Geriatric Hip Fracture Care"]
  },
  {
    id: 'oncology',
    title: "Orthopedic Oncology",
    image: 'ortho-oncology',
    desc: "Comprehensive diagnosis and surgical treatment of benign and malignant bone and soft tissue tumors with limb-salvage surgery.",
    features: ["Bone Tumor Resection", "Limb Salvage Surgery", "Soft Tissue Sarcoma Treatment", "Metastatic Bone Disease Care"]
  }
];

export default function ServicesPage() {
  const phoneNumber = "+918022223456";

  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-bold mb-6">Our Medical Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced surgical and non-surgical solutions for all orthopedic conditions, delivered with excellence and empathy.
          </p>
        </div>
      </section>

      <section className="py-24 space-y-32">
        {services.map((service, idx) => {
          const img = PlaceHolderImages.find(i => i.id === service.image);
          return (
            <div key={service.id} className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h2 className="text-4xl font-headline font-bold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center space-x-2 text-slate-700">
                        <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild size="lg" className="rounded-full px-8">
                    <a href={`tel:${phoneNumber}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call to Book Consultation
                    </a>
                  </Button>
                </div>

                <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <div className="rounded-3xl overflow-hidden soft-shadow h-[400px] relative">
                    <Image 
                      src={img?.imageUrl || ''} 
                      alt={service.title} 
                      fill
                      className="object-cover"
                      data-ai-hint={img?.imageHint}
                    />
                  </div>
                  <div className="absolute -z-10 -bottom-6 -right-6 w-1/2 h-1/2 bg-primary/10 rounded-3xl" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-slate-900 text-white py-24">
         <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl font-headline font-bold">Ready to take the first step towards recovery?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">We provide comprehensive diagnostics and personalized treatment plans for every patient.</p>
            <Button asChild variant="secondary" size="lg" className="rounded-full px-12 py-7 text-lg">
              <a href={`tel:${phoneNumber}`}>Schedule Your Visit Now</a>
            </Button>
         </div>
      </section>
    </div>
  );
}
