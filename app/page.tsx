import HeroImage from "./_comp/(top)/HeroImage";
import BusinessHours from "./_comp/(top)/BusinessHours";
import FAQSection from "./_comp/(top)/FAQSection";
import AccessMap from "./_comp/(top)/AccessMap";

export default function HomePage() {
  return (
    <div>
      {/* Hero Image */}
      <HeroImage />
      {/* Business Hours */}
      <BusinessHours />
      {/* FAQ Section */}
      <FAQSection />
      {/* Access Map */}
      <AccessMap />
    </div>
  );
}
