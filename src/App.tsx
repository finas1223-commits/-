import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ValueProposition } from './components/ValueProposition';
import { FormSection } from './components/FormSection';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';
import { ApplicationFormData } from './types';

export default function App() {
  const [isLargeText, setIsLargeText] = useState(false);
  const [submittedData, setSubmittedData] = useState<ApplicationFormData | null>(null);

  // Smooth scroll handler to the application form
  const handleScrollToForm = () => {
    const formElement = document.getElementById('apply-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Accessibility: focus name input after scrolling
      setTimeout(() => {
        const inputName = document.getElementById('input-name');
        inputName?.focus();
      }, 500);
    }
  };

  const handleToggleLargeText = () => {
    setIsLargeText((prev) => !prev);
  };

  const handleSubmitSuccess = (data: ApplicationFormData) => {
    setSubmittedData(data);
  };

  const handleCloseModal = () => {
    setSubmittedData(null);
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#F9FAF8] text-[#191F28] transition-[font-size] duration-200 ${
        isLargeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
      }`}
    >
      {/* Accessible Skip Link */}
      <a
        href="#apply-form"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-800 text-white font-bold rounded-lg shadow-lg"
      >
        신청 양식으로 바로 가기
      </a>

      {/* 1. Header with large Korean logo & fixed CTA */}
      <Header
        isLargeText={isLargeText}
        onToggleLargeText={handleToggleLargeText}
        onScrollToForm={handleScrollToForm}
      />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section (1-Click Point) */}
        <HeroSection
          isLargeText={isLargeText}
          onScrollToForm={handleScrollToForm}
        />

        {/* 3. Value Proposition (Problem vs Solution, 3 Core Cards) */}
        <ValueProposition isLargeText={isLargeText} />

        {/* 4. Form Section (2-Click and 3-Click Points) */}
        <FormSection
          isLargeText={isLargeText}
          onSubmitSuccess={handleSubmitSuccess}
        />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* Success Modal Dialog */}
      {submittedData && (
        <SuccessModal
          data={submittedData}
          onClose={handleCloseModal}
          isLargeText={isLargeText}
        />
      )}
    </div>
  );
}
