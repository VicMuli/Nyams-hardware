import Hero from '../components/Hero';
import Features from '../components/Features';
import CategoryHighlight from '../components/CategoryHighlight';
import ProductSection from '../components/ProductSection';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';
import MapSection from '../components/MapSection';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <CategoryHighlight />
            <ProductSection />
            <AboutSection />
            <Testimonials />
            <ContactCTA />
            <MapSection />
        </>
    );
}
