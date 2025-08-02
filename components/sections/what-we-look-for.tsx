"use client";
import React from 'react';
import Image from 'next/image';

export const WhatWeLookFor = () => {
  return (
    <section id="what-we-look-for" className="bg-neutral-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 work-sans" style={{ fontWeight: '700' }}>
            What We Look For
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto work-sans">
            We partner with founders who have the right combination of insight, validation, and potential
          </p>
        </div>

        <div className="space-y-16">
          {/* Criteria 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 order-2 lg:order-1">
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-8 shadow-2xl shadow-blue-500/20">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 work-sans" style={{ fontWeight: '700' }}>
                  Founders with deep knowledge of their problem space
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed work-sans">
                  We seek founders who have lived the problem they're solving. Your deep understanding of the market, 
                  users, and pain points gives you a unique advantage in building the right solution.
                </p>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/images/one-min.png"
                  alt="Founder with deep knowledge"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Criteria 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <div className="relative">
                <Image
                  src="/images/idea-2.png"
                  alt="Validated concept"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-8 shadow-2xl shadow-blue-500/20">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 work-sans" style={{ fontWeight: '700' }}>
                  Validated or well-thought-out concepts
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed work-sans">
                  Your idea should be backed by research, user feedback, or a clear market opportunity. 
                  We value concepts that have been tested and refined through thoughtful analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Criteria 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 order-2 lg:order-1">
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-8 shadow-2xl shadow-blue-500/20">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 work-sans" style={{ fontWeight: '700' }}>
                  Ideas with potential for scalability and impact
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed work-sans">
                  We look for opportunities that can grow beyond local markets and create meaningful change. 
                  Your solution should have the potential to reach millions of users and solve real problems.
                </p>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/images/know-min.png"
                  alt="Scalable impact"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};