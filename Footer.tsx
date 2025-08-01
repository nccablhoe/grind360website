import React from 'react';

const SocialIcon: React.FC<{ href: string, 'aria-label': string, path: string }> = ({ href, 'aria-label': ariaLabel, path }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-silver hover:text-lime transition-colors">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d={path} />
        </svg>
    </a>
);

const Footer: React.FC = () => {
    const icons = {
        instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z",
        twitter: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.93 4.93 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
        facebook: "M22.675 0h-21.35C.589 0 0 .589 0 1.325v21.35C0 23.411.589 24 1.325 24H12.82v-9.29h-3.128v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.736 0 1.325-.589 1.325-1.325V1.325C24 .589 23.411 0 22.675 0z",
        youtube: "M21.582,6.186c-0.23-0.854-0.906-1.531-1.76-1.76C18.254,4,12,4,12,4S5.746,4,4.178,4.426 c-0.854,0.23-1.531,0.906-1.76,1.76C2,7.754,2,12,2,12s0,4.246,0.418,5.814c0.23,0.854,0.906,1.531,1.76,1.76 C5.746,20,12,20,12,20s6.254,0,7.822-0.426c0.854-0.23,1.531-0.906,1.76-1.76C22,16.246,22,12,22,12S22,7.754,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"
    };
    
    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Experience', href: '#experience' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-charcoal border-t border-lime/20">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
                    <div className="md:col-span-1">
                        <a href="#home" className="font-headline text-3xl text-white inline-block">
                            GRIND<span className="text-lime">360</span>
                        </a>
                        <p className="mt-4 text-silver max-w-xs mx-auto md:mx-0">
                            Every Angle. Every Athlete.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-headline text-xl text-white mb-4">Quick Links</h4>
                        <ul>
                            {quickLinks.map(item => (
                                <li key={item.label} className="mb-2">
                                    <a href={item.href} className="text-silver hover:text-lime transition-colors">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-headline text-xl text-white mb-4">Contact Us</h4>
                        <ul className="text-silver space-y-2">
                            <li>265 Manor Avenue, Concord, NC 28025</li>
                            <li>John Perry: (704) 712-2714</li>
                            <li><a href="mailto:info@grind360elite.com" className="hover:text-lime">info@grind360elite.com</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-headline text-xl text-white mb-4">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <SocialIcon href="#" aria-label="Instagram" path={icons.instagram} />
                            <SocialIcon href="#" aria-label="Twitter" path={icons.twitter} />
                            <SocialIcon href="#" aria-label="Facebook" path={icons.facebook} />
                            <SocialIcon href="#" aria-label="YouTube" path={icons.youtube} />
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-silver/20 text-center text-silver/70">
                    &copy; {new Date().getFullYear()} Grind360. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;