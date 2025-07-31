"use client";
import React from 'react';
import { Timeline } from "@/components/ui/timeline";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export const HowItWorks = () => {
  const timelineData = [
    {
      title: "Step 1",
      content: (
        <CardSpotlight className="bg-neutral-900/50 backdrop-blur-sm shadow-2xl shadow-blue-500/20 ">
          <div className="px-1 py-4">
            <h4 className="text-xl font-bold text-blue-600 mb-3 work-sans" style={{ fontWeight: '700' }}>Share Your Idea</h4>
            <p className="text-gray-300 text-lg leading-relaxed work-sans">
              You bring your industry insight, market understanding, or innovative concept.
            </p>
          </div>
        </CardSpotlight>
      ),
    },
    {
      title: "Step 2",
      content: (
        <CardSpotlight className="bg-neutral-900/50 backdrop-blur-sm shadow-2xl shadow-blue-500/20">
          <div className="px-1 py-4">
            <h4 className="text-xl font-bold text-blue-600 mb-3 work-sans" style={{ fontWeight: '700' }}>Co-Build With Us</h4>
            <p className="text-gray-300 text-lg leading-relaxed work-sans">
              Our engineers, designers, and growth strategists work alongside you to develop the product.
            </p>
          </div>
        </CardSpotlight>
      ),
    },
    {
      title: "Step 3",
      content: (
        <CardSpotlight className="bg-neutral-900/50 backdrop-blur-sm shadow-2xl shadow-blue-500/20">
          <div className="px-1 py-4">
            <h4 className="text-xl font-bold text-blue-600 mb-3 work-sans" style={{ fontWeight: '700' }}>Scale & Grow</h4>
            <p className="text-gray-300 text-lg leading-relaxed work-sans">
              We help you launch, acquire users, and refine the business model for sustainable growth.
            </p>
          </div>
        </CardSpotlight>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto py-10 px-2 md:px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-quicksand)' }} >
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto work-sans">
            Our proven process to turn your ideas into successful startups
          </p>
        </div>
      </div>
      
      <Timeline data={timelineData} />
    </section>
  );
};