"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, PlayIcon, MicrophoneIcon, SearchIcon, FullscreenIcon } from '../../components/landing/svgs';

export default function GuidePage() {
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
            <h1 className="text-2xl font-bold text-brand-text">User Guide</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-brand-text mb-6">Welcome to MoSpeech</h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed">
              MoSpeech is an innovative communication tool designed to help individuals with speech difficulties 
              express themselves more effectively. This guide will walk you through all the features and how to use them.
            </p>
          </section>

          {/* Getting Started */}
          <section>
            <h3 className="text-2xl font-bold text-brand-text mb-4">Getting Started</h3>
            <div className="bg-white rounded-lg p-6 border border-brand-line">
              <ol className="space-y-4 text-brand-text-secondary">
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                  <span>Navigate to the <Link href="/app" className="text-brand-primary hover:underline">MoSpeech App</Link> to begin creating your message.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                  <span>Browse through the available PECS (Picture Exchange Communication System) cards or use the search function to find specific words.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                  <span>Tap on cards to add them to your message. Each card will be added to the top line and will play its audio.</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Features */}
          <section>
            <h3 className="text-2xl font-bold text-brand-text mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Voice Recognition */}
              <div className="bg-white rounded-lg p-6 border border-brand-line">
                <div className="flex items-center space-x-3 mb-4">
                  <MicrophoneIcon className="w-6 h-6 text-brand-primary" />
                  <h4 className="text-xl font-semibold text-brand-text">Voice Recognition</h4>
                </div>
                <p className="text-brand-text-secondary">
                  Use your voice to search for words. Simply tap the microphone icon and speak the word you're looking for. 
                  The app will find and display matching PECS cards.
                </p>
              </div>

              {/* Text Search */}
              <div className="bg-white rounded-lg p-6 border border-brand-line">
                <div className="flex items-center space-x-3 mb-4">
                  <SearchIcon className="w-6 h-6 text-brand-primary" />
                  <h4 className="text-xl font-semibold text-brand-text">Text Search</h4>
                </div>
                <p className="text-brand-text-secondary">
                  Type words in the search bar to quickly find specific PECS cards. The search is real-time and will 
                  filter results as you type.
                </p>
              </div>

              {/* Audio Playback */}
              <div className="bg-white rounded-lg p-6 border border-brand-line">
                <div className="flex items-center space-x-3 mb-4">
                  <PlayIcon className="w-6 h-6 text-brand-primary" />
                  <h4 className="text-xl font-semibold text-brand-text">Audio Playback</h4>
                </div>
                <p className="text-brand-text-secondary">
                  Each PECS card plays its corresponding audio when tapped. You can also play your entire message 
                  by tapping the play button in the top line.
                </p>
              </div>

              {/* Fullscreen Mode */}
              <div className="bg-white rounded-lg p-6 border border-brand-line">
                <div className="flex items-center space-x-3 mb-4">
                  <FullscreenIcon className="w-6 h-6 text-brand-primary" />
                  <h4 className="text-xl font-semibold text-brand-text">Fullscreen Mode</h4>
                </div>
                <p className="text-brand-text-secondary">
                  Switch to fullscreen mode for a distraction-free experience. This is especially useful for 
                  individuals who need larger, more visible cards.
                </p>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section>
            <h3 className="text-2xl font-bold text-brand-text mb-4">Tips for Best Experience</h3>
            <div className="bg-brand-bg-alt-secondary rounded-lg p-6 border border-brand-line">
              <ul className="space-y-3 text-brand-text-secondary">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-primary font-bold">•</span>
                  <span>Use headphones for clearer audio playback, especially in noisy environments.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-primary font-bold">•</span>
                  <span>Practice with simple words first before building complex sentences.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-primary font-bold">•</span>
                  <span>Use the clear button to start over if you make a mistake.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-primary font-bold">•</span>
                  <span>Take advantage of the voice recognition feature for faster word finding.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Support */}
          <section>
            <h3 className="text-2xl font-bold text-brand-text mb-4">Need Help?</h3>
            <div className="bg-white rounded-lg p-6 border border-brand-line">
              <p className="text-brand-text-secondary mb-4">
                If you need additional support or have questions about using MoSpeech, please don't hesitate to contact us.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 