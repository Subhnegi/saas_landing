import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-pale relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          centered
          pill="Get In Touch"
          title="We're Here to Help"
          subtitle="Have questions about Khatakitab or need help setting up your shop? Our team is always ready to assist you."
          className="mb-16"
        />

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[2.5rem] p-4 sm:p-8 border border-borderLight shadow-sm">

          {/* Contact Info */}
          <div className="lg:w-1/3 bg-navy text-white rounded-[2rem] p-8 sm:p-10 relative overflow-hidden flex flex-col shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -z-10"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-primary/40 rounded-full blur-3xl -z-10"></div>

            <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
            <p className="text-slate-300 text-sm mb-12">Fill up the form and our team will get back to you within 24 hours.</p>

            <div className="space-y-8 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Phone / WhatsApp</h4>
                  <p className="text-slate-300 text-sm">+91 98665 63110</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Email</h4>
                  <p className="text-slate-300 text-sm">support@khatakitab.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">Office</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    123 Innovation Tech Park,<br />
                    Koramangala, Bengaluru,<br />
                    Karnataka 560034
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-4 sm:p-6 lg:p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-navy">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-borderLight focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    placeholder="Rahul"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-navy">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-borderLight focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    placeholder="Sharma"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-navy">Email Address / Phone Number</label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-borderLight focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  placeholder="rahul@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-navy">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-borderLight focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="pt-2">
                <Button size="lg" className="w-full sm:w-auto px-10 shadow-lg shadow-primary/20 group">
                  Send Message
                  <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
