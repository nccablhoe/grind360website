
import React, { useState } from 'react';

const faqData = [
    {
        question: "What age groups do you serve?",
        answer: "Our core programming is built for K–12 student-athletes, but we also serve college students, amateur adults, and professionals. Whether you’re 6 or 36, we have a structured plan for your level."
    },
    {
        question: "Do you train entire teams or just individuals?",
        answer: "Both. We offer 1-on-1, small group, team sessions, and entire athletic program consulting for schools or clubs."
    },
    {
        question: "What’s the difference between Grind 360 and a typical training gym?",
        answer: "We’re a full-circle consulting partner. We combine athletic development, academic mentorship, recruiting support, branding, and life coaching. Most gyms focus on bodies. We build the whole athlete."
    },
    {
        question: "How do NIL services work?",
        answer: "We provide education, media prep, and connections to licensed professionals for contract review and brand partnerships. We don’t act as agents—we act as protectors and mentors."
    },
    {
        question: "Are your coaches certified?",
        answer: "Yes. All our trainers, consultants, and instructors meet or exceed the highest industry standards. Many are former athletes themselves."
    },
    {
        question: "Is this only for elite-level athletes?",
        answer: "No. We meet athletes where they are and build them up, no matter the starting point."
    },
    {
        question: "Can we hire Grind 360 for just consulting or just training?",
        answer: "Yes. Our services are modular. You can book one-off sessions, full packages, or school partnerships."
    },
    {
        question: "What are your rates?",
        answer: "Rates vary by service, level, and commitment length. Fill out the contact form for a custom quote."
    }
];

const FaqItem: React.FC<{ faq: { question: string, answer: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-silver/20">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-5 px-1"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <svg
                    className={`w-6 h-6 text-lime transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-5 px-1 text-silver/90">{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 md:py-32 bg-jet">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="font-headline text-5xl md:text-6xl text-white mb-12">
                        FREQUENTLY ASKED <span className="text-lime">QUESTIONS</span>
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
