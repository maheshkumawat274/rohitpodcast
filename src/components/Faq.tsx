import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is this podcast free or paid?",
    answer: "This is a paid, exclusive podcast. It is not available on YouTube or any public platform. The content is created for learners who want focused and practical insights."
  },
  {
    question: "Is this a live session?",
    answer: "No. This is a recorded podcast session, so you can watch it anytime after you receive the access link."
  },
  {
    question: "Is there any refund?",
    answer: "No. There is no refund, as this is a digital product."
  },
  {
    question: "Who should buy this exclusive podcast?",
    answer: "This podcast is ideal for designers, video editors, freelancers, content creators, and students who want clarity over motivation."
  }
];

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className=" max-w-4xl mx-auto bg-black py-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400",
          "bg-clip-text text-transparent"
        )}>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={cn(
              "group rounded-xl overflow-hidden",
              "bg-gradient-to-r from-zinc-900/50 to-zinc-800/30",
              "border border-zinc-800/50",
              "backdrop-blur-sm",
              "transition-all duration-300",
              openItems.includes(index) && "ring-1 ring-green-500/30"
            )}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-start justify-between p-6 text-left hover:bg-zinc-800/20 transition-colors"
            >
              <div className="flex items-start gap-3 pr-4">
                <span className={cn(
                  "text-2xl font-bold",
                  "bg-gradient-to-r from-green-400 to-emerald-500",
                  "bg-clip-text text-transparent"
                )}>
                  {index + 1}.
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.question}
                </h3>
              </div>
              <span 
                className={cn(
                  "text-2xl text-zinc-400 transition-all duration-300 flex-shrink-0",
                  openItems.includes(index) ? "text-green-400" : "text-zinc-400"
                )}
              >
                {openItems.includes(index) ? '−' : '+'}
              </span>
            </button>
            
            <div 
              className={cn(
                "overflow-hidden transition-all duration-300",
                openItems.includes(index) ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="px-6 pb-6 pl-14">
                <p className="text-zinc-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <p className="text-zinc-500 text-sm">
          Have more questions?{' '}
          <a 
            href="tel:+918252587182"
            className="text-green-400 hover:text-green-300 transition-colors underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
};