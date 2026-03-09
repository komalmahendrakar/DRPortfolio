import { Hero } from '@/components/hero';
import { Specializations } from '@/components/specializations';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { CheckCircle, ShieldCheck, Clock, Users, Globe, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'doctor-profile');

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
  alt="Dr. Poornesh Gowda - Best Spine Surgeon in Bangalore" 
  width={600} 
  height={800}
  className="object-contain w-full h-[600px]"
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
                <h2 className="text-4xl font-headline font-bold mb-6">Dr. Poornesh Gowda MS Ortho</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Poornesh Gowda is a renowned <strong>Orthopedic & Spine Surgeon in Bangalore</strong> with over 9 years of extensive experience in treating complex musculoskeletal disorders. He specializes in advanced <strong>spine surgeries, joint replacements, and high-impact trauma care</strong> at The Bangalore Hospital.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "MS Orthopedics Specialist",
                  "Advanced Spine Surgery",
                  "Joint Replacement Expert",
                  "Trauma & Fracture Specialist",
                  "Minimally Invasive Surgery",
                  "Back Pain Specialist"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-primary">
                <p className="italic text-slate-600 mb-2">"My mission is to provide personalized, compassionate, and advanced orthopedic care for back pain, joint issues, and fractures to help patients return to their active lives."</p>
                <p className="font-bold text-slate-900">— Dr. Poornesh Gowda</p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <a href={`tel:${CONTACT_INFO.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call {CONTACT_INFO.displayPhone}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <a href={`tel:${CONTACT_INFO.secondaryPhone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call {CONTACT_INFO.displaySecondaryPhone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Specializations />

      <Testimonials />

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-headline font-bold mb-6">Expert Orthopedic Care in Bangalore</h2>
            <p className="text-muted-foreground">We combine clinical expertise in spine and joint care with advanced technology and a patient-first approach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Back & Neck Pain", desc: "Specialized treatment for chronic back pain, neck pain, and sciatica.", icon: "🧘" },
              { title: "Spine Surgery", desc: "Expert in minimally invasive spine surgery for disc prolapse and stenosis.", icon: "🦴" },
              { title: "Joint Replacement", desc: "Advanced knee and hip replacement for arthritis and joint pain.", icon: "🦾" },
              { title: "Trauma Care", desc: "24/7 emergency care for complex fractures and accidental injuries.", icon: "🏥" },
              { title: "Sports Injuries", desc: "Recovery for ACL tears, ligament injuries, and sports-related trauma.", icon: "🏃" },
              { title: "Rehabilitation", desc: "Comprehensive post-operative support for a full and fast recovery.", icon: "🌱" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl soft-shadow hover:bg-primary hover:text-white transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-xl font-headline font-bold mb-3">{item.title}</h3>
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
            <h2 className="text-3xl font-headline font-bold mb-4">Orthopedic FAQ</h2>
            <p className="text-muted-foreground">Common questions about spine surgery, joint replacement, and back pain.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Is spine surgery necessary for chronic back pain?", a: "Not always. Most back pain can be managed with non-surgical treatments like physiotherapy and medication. Surgery is only considered for severe conditions like disc prolapse or when conservative methods fail." },
              { q: "What is the recovery time for knee replacement surgery?", a: "Most patients start walking within 24 hours. A full return to normal activities usually takes 6 to 12 weeks with dedicated rehabilitation." },
              { q: "Where can I find the best spine surgeon in Jayanagar?", a: "Dr. Poornesh Gowda practices at The Bangalore Hospital in Jayanagar, offering advanced spine and orthopedic care." },
              { q: "Do you treat sports injuries and fractures?", a: "Yes, we provide comprehensive care for all types of fractures, sports injuries (like ACL tears), and complex trauma cases." },
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
            <p className="text-lg opacity-90">Our emergency team for fractures and trauma at The Bangalore Hospital is available 24/7.</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
             <Button asChild size="lg" variant="secondary" className="rounded-full px-10 py-7 text-lg">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center">
                  Call: {CONTACT_INFO.displayPhone}
                </a>
             </Button>
             <Button asChild size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg bg-white/10 text-white border-white/20 hover:bg-white/20">
                <a href={`tel:${CONTACT_INFO.secondaryPhone}`} className="flex items-center">
                  Call: {CONTACT_INFO.displaySecondaryPhone}
                </a>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
