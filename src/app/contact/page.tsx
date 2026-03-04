"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-headline font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reach out to schedule an appointment or for any medical inquiries. Our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-headline font-bold">{CONTACT_INFO.address.hospital}</h2>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {CONTACT_INFO.address.street}, <br />
                      {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} – {CONTACT_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone Number</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.displayPhone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-headline font-bold flex items-center space-x-2">
                  <Clock className="text-primary" />
                  <span>Working Hours</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Monday – Saturday</span>
                    <span className="text-primary font-bold">9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-destructive font-bold">Closed (Emergency Only)</span>
                  </div>
                </div>
                <Button asChild className="w-full py-6 rounded-xl text-lg">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Call to Book Appointment
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden soft-shadow border-4 border-white h-[600px] relative bg-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.397682334749!2d77.57785871141416!3d12.93774571597841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1580d2aba445%3A0x18f2e5ac44fb9bee!2sDr%20Poornesh%20Elite%20Ortho%20%3A%20Best%20Spine%20Surgeon%20Bangalore!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr Poornesh Elite Ortho Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
