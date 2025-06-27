"use client";

import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-brand-text mb-4">Contact Page</h1>
        <p className="text-brand-text-secondary mb-8">Coming soon - Full design from Figma</p>
        <Link href="/" className="text-brand-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
} 