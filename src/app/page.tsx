
import { Hero } from '@/components/hero';
import { Specializations } from '@/components/specializations';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { CheckCircle, ShieldCheck, Clock, Users, Globe, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'doctor-profile');
  const phoneNumber = "+918022223456";

  const stats = [
    { label: "Experience", value: "9+ Years", icon: ShieldCheck },
    { label: "Surgeries", value: "1500+", icon: Clock },
    { label: "Patients", value: "5000+", icon: Users },
    { label: "Hospitals", value: "3+", icon: Globe },
  ];

  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Stats Counter Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className="bg-white p-3 rounded-2xl soft-shadow text-primary mb-2">
                  <stat.icon size={24} />
                </div>
                <p className="text-3xl font-bold font-headline">{stat.value}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative z-10 rounded-3xl overflow-hidden soft-shadow transition-transform duration-500 group-hover:scale-[1.02]">
                <Image 
                  src={profileImg?.imageUrl || ''} 
                  alt="Dr. Poornesh Gowda" 
                  width={600} 
                  height={800}
                  className="object-cover w-full h-[600px]"
                  data-ai-hint="male doctor"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-8 rounded-3xl soft-shadow z-20 max-w-[280px]">
                <p className="text-4xl font-bold mb-1">9+</p>
                <p className="text-lg font-headline opacity-90 leading-tight">Years of Clinical Excellence</p>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-primary/10 rounded-full -z-0" />
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">About the Surgeon</h4>
                <h3 className="text-4xl font-headline font-bold mb-6">Dr. Poornesh Gowda MS</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Poornesh Gowda is a renowned Orthopedic & Spine Surgeon with over 9 years of extensive experience in treating complex musculoskeletal disorders. He specializes in advanced spine surgeries, joint replacements, and high-impact trauma care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "MS Orthopedics Specialist",
                  "Spine Surgery Expert",
                  "Joint Replacement Expert",
                  "Trauma & Fracture Specialist",
                  "Minimally Invasive Surgeon",
                  "Multilingual Specialist"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-primary">
                <p className="italic text-slate-600 mb-2">"My mission is to provide personalized, compassionate, and advanced orthopedic care to help patients return to their active lives as quickly and safely as possible."</p>
                <p className="font-bold text-slate-900">— Dr. Poornesh Gowda</p>
              </div>

              <div className="flex space-x-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Appointment
                  </a>
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="rounded-full px-8">Visit Clinic</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Specializations />

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-headline font-bold mb-6">Why Choose Our Care?</h2>
            <p className="text-muted-foreground">We combine clinical expertise with advanced technology and a patient-first approach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Advanced Techniques", desc: "Utilizing the latest minimally invasive surgical methods for faster recovery.", icon: "⚡" },
              { title: "Personalized Care", desc: "Every patient receives a unique treatment plan tailored to their specific lifestyle.", icon: "🤝" },
              { title: "Multilingual", desc: "Communication in English, Hindi, Kannada, and Tamil for absolute comfort.", icon: "💬" },
              { title: "Trusted Hospital", desc: "Affiliated with The Bangalore Hospital, a landmark in quality healthcare.", icon: "🏥" },
              { title: "9+ Years Expertise", desc: "Extensive experience in handling complex and high-risk spine surgeries.", icon: "🏆" },
              { title: "Full Recovery Path", desc: "Complete support from diagnosis through surgery to post-op rehabilitation.", icon: "🌱" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl soft-shadow hover:bg-primary hover:text-white transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h4 className="text-xl font-headline font-bold mb-3">{item.title}</h4>
                <p className="opacity-80 leading-relaxed group-hover:text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Get answers to common concerns regarding orthopedic treatments.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Is spine surgery always necessary for back pain?", a: "No, surgery is typically the last resort. Most back pain cases are treated with physiotherapy, medication, and lifestyle adjustments. Surgery is only recommended when conservative treatments fail or neurological symptoms are present." },
              { q: "How long is the recovery period for knee replacement?", a: "Most patients can start walking with support within 24 hours of surgery. Full recovery and returning to normal activities usually takes about 6 to 12 weeks with consistent rehabilitation." },
              { q: "Do you offer video consultations?", a: "Yes, we offer video consultations for follow-ups and initial discussions for patients who cannot travel to the hospital. Please call to schedule." },
              { q: "Which hospital is Dr. Gowda affiliated with?", a: "Dr. Poornesh Gowda is primarily associated with The Bangalore Hospital in Basavanagudi, Bengaluru." },
            ].map((faq, i) => (
              <details key={i} className="group border rounded-2xl p-6 hover:bg-slate-50 transition-colors">
                <summary className="flex justify-between items-center font-headline font-semibold text-lg cursor-pointer list-none">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl font-headline font-bold mb-4">Emergency Orthopedic or Trauma Case?</h2>
            <p className="text-lg opacity-90">Our emergency team at The Bangalore Hospital is available 24/7 for critical orthopedic injuries.</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
             <Button asChild size="lg" variant="secondary" className="rounded-full px-10 py-7 text-lg">
                <a href={`tel:${phoneNumber}`} className="flex items-center">
                  Emergency: 080-2222 3456
                </a>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
