'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Check,
  Globe,
  Warehouse,
  Truck,
  MessageCircle,
  CreditCard,
  Shield,
  Camera,
  FileText,
  Wrench,
  Users,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generateWhatsAppLink } from '@/lib/utils';
import { WHATSAPP_MESSAGES, WHATSAPP_NUMBER, SALES_EMAIL } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const keyServices = [
  {
    icon: FileText,
    title: 'FREE BOQ Generation',
    description: 'Get a detailed Bill of Quantities for your project at no cost. Know exactly what you need and what it will cost before you commit.',
    highlight: 'FREE'
  },
  {
    icon: CreditCard,
    title: 'Multi-Currency Payments',
    description: 'Pay in USD, GBP, EUR, ZAR, or AUD. We accept bank transfers, mobile money, and international payments.',
    highlight: 'Flexible'
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'We deliver directly to your construction site anywhere in Zimbabwe - Harare, Bulawayo, Gweru, Mutare, and beyond.',
    highlight: 'Reliable'
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'Our certified electricians ensure all installations meet Zimbabwe safety standards and regulations.',
    highlight: 'Certified'
  },
  {
    icon: Users,
    title: 'Project Management',
    description: 'Full project oversight from procurement to installation. We act as your trusted representative on the ground.',
    highlight: 'Turnkey'
  },
  {
    icon: Camera,
    title: 'WhatsApp Updates',
    description: 'Regular photo and video updates via WhatsApp so you can see your project progress in real-time.',
    highlight: 'Transparent'
  },
  {
    icon: Shield,
    title: 'Quality Inspection',
    description: 'Professional inspection and quality assurance reports before project handover.',
    highlight: 'Guaranteed'
  },
  {
    icon: Warehouse,
    title: 'Secure Storage',
    description: 'We can safely store your materials in our warehouse until your construction site is ready.',
    highlight: 'Secure'
  },
];

const whyChooseUs = [
  'Direct factory pricing - no middleman markup',
  'Over 27 years serving Zimbabwe',
  '500+ diaspora clients successfully served',
  'Licensed & certified electrical contractors',
  'Comprehensive warranty on all products',
  'Technical support in English & Shona',
  'Trusted by major construction companies',
  'Same-day quotes and BOQs'
];

const currencies = ['USD', 'GBP', 'EUR', 'ZAR', 'AUD'];

const projectTypes = [
  'Residential (New Build)',
  'Residential (Renovation)',
  'Commercial Building',
  'Industrial Facility',
  'Other'
];

export function DiasporaPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    projectType: '',
    currency: 'USD',
    message: '',
    preferWhatsApp: true
  });

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation({ triggerOnce: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
*Diaspora Program Inquiry*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Project Type: ${formData.projectType}
Preferred Currency: ${formData.currency}

Message:
${formData.message}
    `.trim();
    
    const whatsappUrl = generateWhatsAppLink(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-gids-blue via-gids-blue-dark to-gids-blue py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gids-red rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div
            ref={heroRef}
            className={cn(
              'max-w-4xl mx-auto text-center scroll-fade-in',
              heroVisible && 'visible'
            )}
          >
            <Badge className="bg-gids-red text-white mb-4 text-sm px-4 py-1.5">
              Diaspora Program
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Your Dream Home in Zimbabwe
              <br />
              <span className="text-yellow-400">From Anywhere in the World</span>
            </h1>
            
            <p className="text-gray-200 text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Are you living in the UK, South Africa, USA, Canada, or Australia and planning to build back home? 
              We've helped over 500 Zimbabweans in the diaspora source quality electrical materials, 
              manage projects, and build with confidence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={generateWhatsAppLink(WHATSAPP_MESSAGES.diaspora)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gids-red hover:bg-gids-red-dark text-white px-8"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
              <Button
                size="lg"
                className="bg-white text-gids-blue hover:bg-gray-100 border-2 border-white"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request FREE BOQ
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section ref={servicesRef} className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={cn(
              'text-center mb-12 scroll-fade-in',
              servicesVisible && 'visible'
            )}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gids-blue mb-4">
              How We Help You Build From Abroad
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive support at every stage - from planning to installation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {keyServices.map((service, index) => (
              <div
                key={index}
                className={cn(
                  'bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-gids-blue hover:shadow-xl transition-all duration-300 scroll-slide-up',
                  servicesVisible && 'visible'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gids-blue/10 rounded-xl flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-gids-blue" />
                  </div>
                  {service.highlight && (
                    <Badge className="absolute -top-2 -right-2 bg-gids-red text-white text-xs">
                      {service.highlight}
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section ref={processRef} className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={cn(
              'text-center mb-12 scroll-fade-in',
              processVisible && 'visible'
            )}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gids-blue mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From first contact to project completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Share Your Plans',
                description: 'Send us your building plans or material requirements via WhatsApp, email, or our contact form.',
                icon: MessageCircle
              },
              {
                step: '02',
                title: 'Get FREE BOQ',
                description: 'Within 24-48 hours, receive a detailed Bill of Quantities with transparent pricing in your preferred currency.',
                icon: FileText
              },
              {
                step: '03',
                title: 'Make Payment',
                description: 'Pay securely via international bank transfer or mobile money. We accept USD, GBP, EUR, ZAR, and AUD.',
                icon: CreditCard
              },
              {
                step: '04',
                title: 'We Deliver & Install',
                description: 'Track your project via WhatsApp updates. We handle delivery, installation, and quality inspection.',
                icon: CheckCircle2
              }
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  'relative scroll-slide-up',
                  processVisible && 'visible'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-gids-blue/20">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 bg-gids-blue rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gids-blue/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GIDS-MARTZ */}
      <section ref={whyRef} className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={cn(
                'scroll-slide-right',
                whyVisible && 'visible'
              )}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gids-blue mb-6">
                Why Diaspora Clients Trust Us
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Building from abroad requires trust, transparency, and reliability. 
                Here's why over 500 Zimbabweans in the diaspora choose GIDS-MARTZ:
              </p>
              
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gids-blue/5 rounded-xl border-l-4 border-gids-blue">
                <p className="text-gray-700 italic">
                  "GIDS-MARTZ made building from the UK stress-free. The WhatsApp updates and 
                  professional project management gave me complete peace of mind. I knew exactly 
                  what was happening every step of the way."
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  — Tendai M., London, UK
                </p>
              </div>
            </div>

            <div
              className={cn(
                'scroll-slide-left',
                whyVisible && 'visible'
              )}
            >
              <div className="relative">
                <Image
                  src="https://placehold.co/600x700/1E3A8A/FFFFFF?text=Quality+Installation"
                  alt="Professional electrical installation"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl"
                />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gids-blue">27+</div>
                      <div className="text-xs text-gray-600">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gids-blue">500+</div>
                      <div className="text-xs text-gray-600">Diaspora Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gids-blue">100%</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gids-blue mb-4">
                Get Your FREE Bill of Quantities
              </h2>
              <p className="text-gray-600 text-lg">
                Share your project details and we'll send you a detailed BOQ within 24-48 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Moyo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone/WhatsApp *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+44 7700 900000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country of Residence *
                  </label>
                  <Input
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="United Kingdom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Currency *
                  </label>
                  <Select
                    value={formData.currency}
                    onValueChange={(value) => setFormData({ ...formData, currency: value })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((curr) => (
                        <SelectItem key={curr} value={curr}>
                          {curr}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details / Material Requirements *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Please describe your project, material requirements, or attach building plans..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="whatsapp"
                  checked={formData.preferWhatsApp}
                  onChange={(e) => setFormData({ ...formData, preferWhatsApp: e.target.checked })}
                  className="mt-1 rounded"
                />
                <label htmlFor="whatsapp" className="text-sm text-gray-600">
                  I prefer to receive updates via WhatsApp
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gids-blue hover:bg-gids-blue-dark text-white"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Send via WhatsApp
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive project updates via WhatsApp and email. 
                We respect your privacy and never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-gids-blue py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Have Questions? We're Here to Help
              </h3>
              <p className="text-gray-300">
                Speak with our diaspora program specialist today
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${WHATSAPP_NUMBER}`}>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gids-blue">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </Button>
              </a>
              <a href={`mailto:${SALES_EMAIL}`}>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gids-blue">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
              </a>
              <a
                href={generateWhatsAppLink(WHATSAPP_MESSAGES.diaspora)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gids-red hover:bg-gids-red-dark text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
