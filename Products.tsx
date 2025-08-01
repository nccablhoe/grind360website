
import React, { useState } from 'react';

const services = [
    {
        name: 'YOUTH & STUDENT-ATHLETE DEVELOPMENT',
        description: 'Structured programming for K-12. We focus on speed & agility, age-appropriate strength training, sport-specific IQ, fundamentals, progress testing, and mindset coaching.',
        image: 'https://images.pexels.com/photos/8639739/pexels-photo-8639739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A group of young soccer players huddling together with their coach.',
        video: 'https://assets.codepen.io/6093409/youth-development.mp4',
    },
    {
        name: 'AMATEUR ATHLETE PROGRAMS',
        description: 'For college & semi-pro athletes chasing greatness. Services include advanced film review, performance metrics, recruiting exposure, and NCAA compliance consulting.',
        image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A male athlete performing a barbell deadlift in a gym.',
        video: 'https://assets.codepen.io/6093409/amateur-training.mp4',
    },
    {
        name: 'PROFESSIONAL ATHLETE SERVICES',
        description: 'Confidential support for pros. We offer off-season blueprint design, longevity planning, career management, brand development, and post-career strategy.',
        image: 'https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'An elite male athlete sprinting on a track inside a stadium.',
        video: 'https://assets.codepen.io/6093409/pro-services.mp4',
    },
    {
        name: 'SCHOOL & ORGANIZATION CONSULTING',
        description: 'For athletic directors and community programs. We offer program buildout, academic compliance alignment, curriculum design, and coach mentorship.',
        image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A diverse team of professionals collaborating around a table in a modern office.',
        video: 'https://assets.codepen.io/6093409/school-consulting.mp4',
    },
    {
        name: 'EVENTS & TRAINING EXPERIENCES',
        description: 'Elite, high-energy events including speed camps, skill clinics, exposure showcases, team-building retreats, and family education nights on NIL and recruiting.',
        image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Young athletes participating in a cone drill at a sports camp.',
        video: 'https://assets.codepen.io/6093409/events-camps.mp4',
    },
    {
        name: 'GRIND LIFE ACADEMY',
        description: 'Our secret weapon where life meets sports. We provide character development, mental performance coaching, financial literacy, and real-world mentorship.',
        image: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'A coach giving instructions to a youth basketball team during a timeout.',
        video: 'https://assets.codepen.io/6093409/grind-life-academy.mp4',
    },
];

const Products: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-20 md:py-32 bg-jet">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-headline text-5xl md:text-6xl text-white mb-4">
                    OUR <span className="text-lime">SERVICES</span>
                </h2>
                <p className="text-lg text-silver mb-12 max-w-3xl mx-auto">
                    We offer a full-circle approach to athletic development, providing comprehensive, NCAA-compliant programs for individual athletes, schools, and teams.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-charcoal rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg flex flex-col"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative h-64 w-full">
                               {hoveredIndex === index ? (
                                   <video
                                       src={service.video}
                                       autoPlay
                                       muted
                                       loop
                                       playsInline
                                       className="absolute inset-0 w-full h-full object-cover"
                                       key={service.video}
                                   >
                                    Your browser does not support the video tag.
                                   </video>
                               ) : (
                                   <img 
                                       src={service.image} 
                                       alt={service.alt} 
                                       className="absolute inset-0 w-full h-full object-cover" 
                                   />
                               )}
                               <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/50 to-transparent"></div>
                            </div>
                            <div className="p-6 text-left flex-grow flex flex-col -mt-16 z-10">
                                <h3 className="font-headline text-2xl text-white mb-2">{service.name}</h3>
                                <p className="font-body text-silver flex-grow">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
