import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickAccessSection } from "@/components/home/QuickAccessSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickAccessSection />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
