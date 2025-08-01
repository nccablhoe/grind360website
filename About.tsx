import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-charcoal">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="font-headline text-5xl md:text-6xl text-white mb-6">
                            OUR <span className="text-lime">MISSION</span>
                        </h2>

                        <h3 className="font-headline text-3xl text-white mb-2">Our Origin</h3>
                        <p className="text-lg text-silver mb-6">
                            Grind 360 began with a simple mission: develop better student-athletes. But the impact grew fast. As our athletes leveled up, so did our programs—expanding to serve amateurs chasing greatness and professionals working to preserve it.
                        </p>

                        <h3 className="font-headline text-3xl text-white mb-2">Who We Serve</h3>
                        <ul className="list-disc list-inside text-lg text-silver mb-6 space-y-2">
                            <li><span className="font-bold">Youth (K–12):</span> Our foundation. We build fundamentals, athletic IQ, discipline, and character.</li>
                            <li><span className="font-bold">Amateur Athletes:</span> We sharpen skills, manage exposure, and guide careers for college and post-grad competitors.</li>
                            <li><span className="font-bold">Professional Athletes:</span> We help pros extend careers, build brands, recover intelligently, and plan life after sports.</li>
                        </ul>
                        
                        <h3 className="font-headline text-3xl text-white mb-2">What Makes Us Different</h3>
                        <p className="text-lg text-silver">
                            We are a full-circle performance partner—building total athletes through training, mentorship, academic alignment, and career strategy.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img 
                            src="https://images.pexels.com/photos/6551068/pexels-photo-6551068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Grind360 coach with a clipboard discussing strategy with a youth sports team."
                            className="rounded-lg shadow-2xl shadow-lime/10 object-cover w-full h-full max-h-[500px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;