
import React, { useState, useEffect } from 'react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-charcoal shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="font-headline text-3xl text-white">
                    GRIND<span className="text-lime">360</span>
                </a>
                
                <div className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="font-body text-silver hover:text-lime transition-colors duration-300">{link.label}</a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="z-50 relative">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </nav>

            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-charcoal pt-20 pb-4`}>
                <div className="flex flex-col items-center">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-3 font-body text-lg text-silver hover:text-lime transition-colors duration-300">{link.label}</a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
