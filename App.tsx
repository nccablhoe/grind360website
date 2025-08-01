import React from 'react';
import Header from './components/Header';
import Grind360Home from './components/Grind360Home';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

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