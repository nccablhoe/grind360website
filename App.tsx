import React from 'react';
import Header from './components/Header.tsx';
import Grind360Home from './components/Grind360Home.tsx';
import About from './components/About.tsx';
import Products from './components/Products.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
    return (
        <div className="bg-jet font-body text-silver">
            <Header />
            <main>
                <Grind360Home />
                <About />
                <Products />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;