import { Divider, Footer, Navbar } from "@/components";
import {
  WhyChoosePayDinner,
  Hero,
  HowItWorks,
  Testimonials,
  FAQ,
} from "@/sections/landing-page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoosePayDinner />
      <Divider className="bg-gray" />
      <HowItWorks />
      <Divider className="bg-gray" />
      <Testimonials />
      <Divider className="bg-gray" />
      <FAQ />
      <Footer />
    </>
  );
}
