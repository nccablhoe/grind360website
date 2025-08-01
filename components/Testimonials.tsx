
import React from 'react';

const teamQualifications = [
    'Former Division I & II athletes',
    'Certified performance specialists & educators',
    'NCAA compliance experts & mentors',
    'Branding and NIL consultants with verified deals',
    'Coaches of national champions & pro athletes'
];

const achievements = [
    { value: '150+', text: 'Athletes Placed in College Programs' },
    { value: '10+', text: 'Systems Adopted by Schools & Academies' },
    { value: '30+', text: 'NIL Deals Negotiated & Prepared' },
];

const Testimonials: React.FC = () => {
    return (
        <section id="experience" className="py-20 md:py-32 bg-charcoal">
            <div className="container mx-auto px-6">
                <h2 className="font-headline text-5xl md:text-6xl text-white text-center mb-16">
                    <span className="text-lime">EXPERIENCE</span> THAT MATTERS
                </h2>
                
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <div className="w-full max-w-md mx-auto">
                        <img 
                            src="https://images.pexels.com/photos/4398895/pexels-photo-4398895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="A focused professional athlete in portrait, representing Grind 360's elite clients." 
                            className="rounded-lg shadow-2xl shadow-lime/10 w-full object-cover"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col gap-12">
                         {/* Achievements */}
                        <div className="grid sm:grid-cols-3 gap-8 text-center">
                            {achievements.map((item, index) => (
                                <div key={index} className="bg-jet p-6 rounded-lg shadow-lg border-b-4 border-lime/50 flex flex-col justify-center items-center">
                                    <p className="font-headline text-5xl text-lime">{item.value}</p>
                                    <p className="text-silver mt-2 font-body text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Team Qualifications */}
                        <div className="text-center md:text-left">
                            <h3 className="font-headline text-3xl text-white mb-4">Our Leadership Includes:</h3>
                            <ul className="space-y-3">
                                {teamQualifications.map((item, index) => (
                                    <li key={index} className="flex items-start text-left">
                                        <svg className="w-6 h-6 text-lime flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span className="text-lg text-silver">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
