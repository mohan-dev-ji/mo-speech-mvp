"use client";

import React from 'react';
import Navbar from '../../components/shared/ui/Navbar';
import Footer from '../../components/shared/ui/Footer';
import HeadingSection from '../../components/guide/sections/HeadingSection';
import SingleWordSection from '../../components/guide/sections/SingleWordSection';
import AdviceSection from '../../components/guide/sections/AdviceSection';
import KeyWordsSection from '../../components/guide/sections/KeyWordsSection';
import FullSentencesSection from '../../components/guide/sections/FullSentencesSection';
import Advice2Section from '../../components/guide/sections/Advice2Section';
import ThreeStepsSection from '../../components/landing/sections/ThreeStepsSection';
import FinalCtaSection from '@/app/components/landing/sections/FinalCtaSection';

export default function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-background w-full">
      <Navbar />
      <main className="flex-1">
        <HeadingSection />
        <SingleWordSection />
        <AdviceSection />
        <KeyWordsSection />
        <Advice2Section />
        <FullSentencesSection />
        <ThreeStepsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
} 