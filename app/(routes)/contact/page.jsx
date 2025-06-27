"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, MailIcon, PhoneIcon, MapPinIcon } from '../../components/landing/svgs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Header */}
      <header className="bg-white border-b border-brand-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeftIcon className="w-5 h-5 text-brand-text" />
                <span className="text-lg font-semibold text-brand-text">Back to Home</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-brand-text">Contact Us</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-brand-text mb-6">Get in Touch</h2>
            <p className="text-lg text-brand-text-secondary mb-8">
              Have questions about MoSpeech? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-line rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-brand-line rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brand-text mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-brand-line rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-brand-line rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-brand-text mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <MailIcon className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-text mb-1">Email</h4>
                  <p className="text-brand-text-secondary">support@mospeech.com</p>
                  <p className="text-sm text-brand-text-secondary mt-1">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-text mb-1">Phone</h4>
                  <p className="text-brand-text-secondary">+1 (555) 123-4567</p>
                  <p className="text-sm text-brand-text-secondary mt-1">Monday - Friday, 9 AM - 5 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-text mb-1">Office</h4>
                  <p className="text-brand-text-secondary">
                    123 Innovation Drive<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-brand-text mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-brand-line">
                  <h4 className="font-semibold text-brand-text mb-2">How do I get started with MoSpeech?</h4>
                  <p className="text-brand-text-secondary text-sm">
                    Check out our comprehensive <Link href="/guide" className="text-brand-primary hover:underline">User Guide</Link> for step-by-step instructions.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-brand-line">
                  <h4 className="font-semibold text-brand-text mb-2">Is MoSpeech free to use?</h4>
                  <p className="text-brand-text-secondary text-sm">
                    Yes, MoSpeech is currently free to use. We're committed to making communication accessible to everyone.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-brand-line">
                  <h4 className="font-semibold text-brand-text mb-2">Can I suggest new features?</h4>
                  <p className="text-brand-text-secondary text-sm">
                    Absolutely! We welcome feedback and suggestions. Use the contact form above to share your ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 