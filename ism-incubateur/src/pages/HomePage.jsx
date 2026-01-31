import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import CTASection from '../components/home/CTASection';
import '../styles/global.css';
import '../styles/variables.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <Hero />
                <Mission />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;

