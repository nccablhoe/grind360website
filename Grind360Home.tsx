import React, { useState, useEffect } from 'react';

const Grind360Home: React.FC = () => {
    const [introFinished, setIntroFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroFinished(true);
        }, 4000);

        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleIntroEnd = () => {
        setIntroFinished(true);
    };

    if (!introFinished) {
        return (
            <div className="fixed inset-0 bg-jet flex items-center justify-center z-50">
                <video
                    key="intro-video"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleIntroEnd}
                    className="w-full max-w-xl object-contain"
                >
                    <source src="https://assets.codepen.io/6093409/grind360-intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }

    return (
        <section id="home" className="relative h-screen w-screen overflow-hidden bg-jet animate-fadeIn">
            <video
                key="hero-video"
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://assets.codepen.io/6093409/grind360-hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-jet opacity-60 z-10"></div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-4">
                <header className="flex flex-col items-center">
                    <h1 className="font-headline text-6xl md:text-8xl lg:text-[9rem] tracking-wider text-white drop-shadow-2xl">
                        EVERY ANGLE. <span className="text-lime">EVERY ATHLETE.</span>
                    </h1>
                    <p className="font-body text-lg md:text-xl text-silver mt-2 max-w-3xl">
                       From the classroom to the big leagues, Grind 360 delivers elite performance coaching, holistic athlete development, and life-ready mentorship for competitors at every stage.
                    </p>
                </header>

                <div className="mt-12">
                    <a href="#contact" className="font-headline text-xl bg-lime text-jet px-10 py-4 rounded-sm shadow-lg shadow-lime/20 hover:bg-white hover:shadow-xl hover:shadow-lime/40 transition-all duration-300 ease-in-out transform hover:scale-105">
                        START YOUR GRIND
                    </a>
                </div>

                <a href="#about" aria-label="Scroll to about section" className="absolute bottom-10 animate-bounce">
                    <svg className="w-8 h-8 text-lime" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Grind360Home;